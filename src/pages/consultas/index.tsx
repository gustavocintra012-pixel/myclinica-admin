import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import style from "./style";
import { getFirestore, collection, getDocs, doc, updateDoc } from "firebase/firestore";
import app from "../../firebase/config";

interface Hour {
  id: string;
  hora: string;
  status: string;
  cliente?: string;
  pet?: string;
}

interface Day {
  id: string;
  aberto: boolean;
}

export default function Consultas() {
  const db = getFirestore(app);
  const [dias, setDias] = useState<Day[]>([]);
  const [horariosPorDia, setHorariosPorDia] = useState<{ [key: string]: Hour[] }>({});
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const formatarDia = (id: string) => {
    const [ano, mes, dia] = id.split("-");
    return `${dia}/${mes}`;
  };

  useEffect(() => {
    const fetchDiasEHorarios = async () => {
      try {
        const diasSnapshot = await getDocs(collection(db, "dias"));
        const listaDias: Day[] = diasSnapshot.docs.map(d => ({
          id: d.id,
          ...d.data(),
        } as Day));

        listaDias.sort((a, b) => a.id.localeCompare(b.id));
        setDias(listaDias);

        const horariosObj: { [key: string]: Hour[] } = {};
        for (let dia of listaDias) {
          const horariosSnapshot = await getDocs(collection(db, "dias", dia.id, "horarios"));
          const listaHorarios: Hour[] = horariosSnapshot.docs.map(h => ({
            id: h.id,
            ...h.data(),
          } as Hour));

          listaHorarios.sort((a, b) => {
            const [ah, am] = a.hora.split(":").map(Number);
            const [bh, bm] = b.hora.split(":").map(Number);
            return ah * 60 + am - (bh * 60 + bm);
          });

          horariosObj[dia.id] = listaHorarios;
        }

        setHorariosPorDia(horariosObj);
      } catch (error) {
        console.error("Erro ao buscar dias e horários:", error);
      }
    };

    fetchDiasEHorarios();
  }, []);

  const toggleStatus = async (dayId: string, hour: Hour) => {
    try {
      const novoStatus = hour.status === "vago" ? "ocupado" : "vago";
      const horarioRef = doc(db, "dias", dayId, "horarios", hour.id);

      await updateDoc(horarioRef, { status: novoStatus });

      setHorariosPorDia(prev => ({
        ...prev,
        [dayId]: prev[dayId].map(h => (h.id === hour.id ? { ...h, status: novoStatus } : h)),
      }));
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
      Alert.alert("Erro ao atualizar status");
    }
  };

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.headerTitle}>Consultas Agendadas</Text>
      </View>

      <View style={style.calendarContainer}>
        <FlatList
          data={dias}
          horizontal
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={style.scrollDates}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedDay(item.id)}
              style={[style.dateBox, selectedDay === item.id && style.selectedDateBox]}
            >
              <Text style={style.dayText}>Dia</Text>
              <Text style={style.dateText}>{formatarDia(item.id)}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {selectedDay && horariosPorDia[selectedDay] && (
        <View style={{ flex: 1 }}>
          {/* Horários fixos */}
          <View style={style.hoursContainer}>
            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
              {horariosPorDia[selectedDay].map(item => (
                <TouchableOpacity
                  key={item.id}
                  style={{
                    backgroundColor: item.status === "vago" ? "#C8F7C5" : "#D9534F",
                    paddingVertical: 15,
                    borderRadius: 12,
                    marginBottom: 10,
                    alignItems: "center",
                    width: '23%',
                  }}
                  onPress={() => toggleStatus(selectedDay, item)}
                >
                  <Text style={{ fontWeight: "bold", marginBottom: 5 }}>{item.hora}</Text>
                  <Text style={{ color: "#fff" }}>{item.status}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={{ flex: 1, marginTop: -110 }}>
            <Text style={{ textAlign:'center', fontWeight: "bold", fontSize: 24, marginBottom: 10 }}>
              Consultas do dia
            </Text>
            <FlatList
              data={horariosPorDia[selectedDay].filter(h => h.status === "ocupado")}
              keyExtractor={h => h.id}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor: "#f2f2f2",
                    padding: 12,
                    borderRadius: 8,
                    marginBottom: 8,
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>{item.hora}</Text>
                  <Text>{item.cliente} - {item.pet}</Text>
                </View>
              )}
            />
          </View>
        </View>
      )}
    </View>
  );
}

import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";

interface Reserva {
  id: string;
  pet: string;
  data: string;
  horario: string;
}

interface Dia {
  id: string;
  data: string;
}

export default function Hotel() {
  // Lista de dias disponíveis
  const [dias, setDias] = useState<Dia[]>([
    { id: "1", data: "10/11/2025" },
    { id: "2", data: "11/11/2025" },
    { id: "3", data: "12/11/2025" },
  ]);

  // Reservas existentes
  const [reservas, setReservas] = useState<Reserva[]>([
    { id: "1", pet: "Rex", data: "10/11/2025", horario: "14:00" },
    { id: "2", pet: "Luna", data: "12/11/2025", horario: "10:00" },
  ]);

  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  function removerReserva(id: string) {
    Alert.alert("Excluir", "Deseja excluir esta reserva?", [
      { text: "Cancelar" },
      {
        text: "Excluir",
        onPress: () =>
          setReservas((prev) => prev.filter((r) => r.id !== id)),
      },
    ]);
  }

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.title}>Painel do Hotel 🏨</Text>
      </View>

      {/* Seleção de dia */}
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        {dias.map((dia) => (
          <TouchableOpacity
            key={dia.id}
            style={{
              padding: 10,
              backgroundColor: selectedDay === dia.id ? "#4CAF50" : "#ccc",
              marginRight: 8,
              borderRadius: 8,
            }}
            onPress={() => setSelectedDay(dia.id)}
          >
            <Text style={{ color: "#fff" }}>{dia.data}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Horários fixos do dia selecionado */}
      {selectedDay && (
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}>
            Horários do dia
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
            {["08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"].map((hora) => {
              const reserva = reservas.find(r => r.data === dias.find(d => d.id === selectedDay)?.data && r.horario === hora);
              return (
                <View
                  key={hora}
                  style={{
                    width: "23%",
                    paddingVertical: 15,
                    marginBottom: 10,
                    alignItems: "center",
                    borderRadius: 12,
                    backgroundColor: reserva ? "#D9534F" : "#C8F7C5",
                  }}
                >
                  <Text style={{ fontWeight: "bold", color: "#fff" }}>{hora}</Text>
                  <Text style={{ color: "#fff" }}>{reserva ? "Ocupado" : "Livre"}</Text>
                </View>
              );
            })}
          </View>

          {/* Lista de reservas do dia */}
          <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 20, marginBottom: 10 }}>
            Reservas do dia
          </Text>
          <FlatList
            data={reservas.filter(r => r.data === dias.find(d => d.id === selectedDay)?.data)}
            keyExtractor={(item) => item.id}
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
                <Text style={{ fontWeight: "bold" }}>{item.horario}</Text>
                <Text>{item.pet}</Text>
                <TouchableOpacity onPress={() => removerReserva(item.id)}>
                  <Feather name="trash-2" size={20} color="#D9534F" />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
}

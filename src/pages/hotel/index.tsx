import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Alert, FlatList, Modal, Text, TextInput, TouchableOpacity, View, } from "react-native";
import { style } from "./style";

interface Reserva {
  id: string;
  pet: string;
  data: string;
  horario: string;
}

export default function Hotel() {
  const [reservas, setReservas] = useState<Reserva[]>([
    { id: "1", pet: "Rex", data: "10/11/2025", horario: "14:00" },
    { id: "2", pet: "Luna", data: "12/11/2025", horario: "10:00" },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [pet, setPet] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");

  function adicionarReserva() {
    if (!pet || !data || !horario) {
      return Alert.alert("Atenção", "Preencha todos os campos");
    }

    const novaReserva: Reserva = {
      id: Math.random().toString(),
      pet,
      data,
      horario,
    };

    setReservas((prev) => [...prev, novaReserva]);
    setPet("");
    setData("");
    setHorario("");
    setModalVisible(false);
  }

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
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={style.headerButton}>
            <Feather name="plus-circle" size={22} color="#fff" />
            <Text style={style.headerButtonText}>Nova Reserva</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={style.subtitle}>Gerencie as hospedagens e reservas</Text>
      <FlatList
        data={reservas}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        renderItem={({ item }) => (
          <View style={style.card}>
            <View style={style.cardInfo}>
              <Text style={style.petName}>{item.pet}</Text>
              <Text style={style.info}>
                📅 {item.data} | 🕒 {item.horario}
              </Text>
            </View>
            <TouchableOpacity
              style={style.deleteButton}
              onPress={() => removerReserva(item.id)}
            >
              <Feather name="trash-2" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
      />
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={style.modalContainer}>
          <View style={style.modalBox}>
            <Text style={style.modalTitle}>Adicionar Reserva</Text>

            <TextInput
              placeholder="Nome do pet"
              placeholderTextColor="#999"
              style={style.input}
              value={pet}
              onChangeText={setPet}
            />
            <TextInput
              placeholder="Data (ex: 12/11/2025)"
              placeholderTextColor="#999"
              style={style.input}
              value={data}
              onChangeText={setData}
            />
            <TextInput
              placeholder="Horário (ex: 14:00)"
              placeholderTextColor="#999"
              style={style.input}
              value={horario}
              onChangeText={setHorario}
            />

            <View style={style.modalButtons}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={[style.btn, style.btnCancel]}
              >
                <Text style={style.btnText}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={adicionarReserva}
                style={[style.btn, style.btnConfirm]}
              >
                <Text style={style.btnText}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

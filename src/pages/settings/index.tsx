import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { style } from "./style"
import { MaterialIcons } from "@expo/vector-icons";

export default function Settings() {
  return (
    <View style={style.container}>

      <View style={style.header}>
        <Text style={style.title}>Configurações</Text>
      </View>

      <View style={style.content}>
        <TouchableOpacity style={style.option}>
          <Text style={style.optionText}>Editar Perfil</Text>
          <MaterialIcons name="keyboard-arrow-right" size={28} color="#555" />
        </TouchableOpacity>

        <TouchableOpacity style={style.option}>
          <Text style={style.optionText}>Notificações</Text>
          <MaterialIcons name="keyboard-arrow-right" size={28} color="#555" />
        </TouchableOpacity>
      </View>

    </View>
  );
}

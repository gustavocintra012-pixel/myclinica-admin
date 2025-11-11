import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Text, TouchableOpacity, View, Alert } from "react-native";
import { style } from "./style";

type RootStackParamList = {
  Login: undefined;
  Cadastro: undefined;
  Home: undefined;
  Consultas: undefined;
  Exames: undefined;
  Hotel: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

export default function Home({ navigation }: { navigation: HomeScreenNavigationProp }) {
  return (
    <View style={style.container}>
      <Text style={style.title}>Painel do Administrador</Text>
      <Text style={style.subtitle}>Gerencie toda a clínica por aqui 🐾</Text>

      <View style={style.buttonsContainer}>
        <TouchableOpacity
          style={style.button}
          onPress={() => navigation.navigate("Consultas")}
        >
          <Text style={style.buttonText}>Gerenciar Consultas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.button}
          onPress={() => navigation.navigate("Exames")}
        >
          <Text style={style.buttonText}>Enviar Exames</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.botao}
          onPress={() => navigation.navigate("Hotel")}
        >
          <Text style={style.textoBotao}>Hotel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.button}
          onPress={() => Alert.alert("Configurações", "Botão de exemplo clicado!")}
        >
          <Text style={style.buttonText}>Configurações</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[style.button, style.logoutButton]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={style.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

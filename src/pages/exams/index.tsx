import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

type RootStackParamList = {
  Home: undefined;
  Exames: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, "Exames">;

export default function Exames() {
  const navigation = useNavigation<NavigationProp>();

  const [cliente, setCliente] = useState("");
  const [descricao, setDescricao] = useState("");
  const [arquivo, setArquivo] = useState<string | null>(null);

  function selecionarArquivo() {
    setArquivo("exame_resultado.pdf");
    Alert.alert("Arquivo selecionado", "exame_resultado.pdf");
  }

  function enviarExame() {
    if (!cliente || !descricao || !arquivo) {
      return Alert.alert("Atenção", "Preencha todos os campos e selecione um arquivo!");
    }

    Alert.alert("Sucesso", `Exame enviado para ${cliente}!`);
    setCliente("");
    setDescricao("");
    setArquivo(null);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Envio de Exames</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do cliente"
        placeholderTextColor="#888"
        value={cliente}
        onChangeText={setCliente}
      />

      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Descrição do exame"
        placeholderTextColor="#888"
        value={descricao}
        onChangeText={setDescricao}
        multiline
      />

      <TouchableOpacity style={styles.botaoArquivo} onPress={selecionarArquivo}>
        <Text style={styles.textoBotao}>
          {arquivo ? `📎 ${arquivo}` : "Selecionar arquivo"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoEnviar} onPress={enviarExame}>
        <Text style={styles.textoBotao}>Enviar Exame</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.voltar} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.voltarTexto}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

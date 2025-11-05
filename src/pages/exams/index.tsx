import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import { styles } from "./style";

import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

type RootStackParamList = {
  Home: undefined;
  Exames: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, "Exames">;

export default function Exames() {
  const navigation = useNavigation<NavigationProp>();

  const [emailCliente, setEmailCliente] = useState("");
  const [cliente, setCliente] = useState<any>(null);
  const [descricao, setDescricao] = useState("");

  async function buscarCliente() {
    if (!emailCliente) return Alert.alert("Atenção", "Digite o email do cliente!");

    const clientesRef = collection(db, "clientes");
    const q = query(clientesRef, where("email", "==", emailCliente.trim().toLowerCase()));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      Alert.alert("Não encontrado", "Nenhum cliente com esse email foi encontrado.");
      setCliente(null);
      return;
    }

    setCliente(snapshot.docs[0].data());
    Alert.alert("Cliente encontrado", `Cliente: ${snapshot.docs[0].data().nome}`);
  }

  async function enviarExame() {
    if (!cliente || !descricao) {
      return Alert.alert(
        "Atenção",
        "Busque o cliente e preencha a descrição!"
      );
    }

    try {
      await addDoc(collection(db, "exames"), {
        clienteEmail: cliente.email,
        clienteNome: cliente.nome,
        descricao: descricao,
        arquivo: "RaioX.pdf",
        data: new Date(),
      });

      Alert.alert("Sucesso", `Exame enviado para ${cliente.nome}!`);

      setEmailCliente("");
      setCliente(null);
      setDescricao("");
    } catch (error) {
      console.log("Erro ao enviar exame:", error);
      Alert.alert("Erro", "Não foi possível enviar o exame.");
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Envio de Exames</Text>

      <TextInput
        style={styles.input}
        placeholder="Email do cliente"
        placeholderTextColor="#888"
        value={emailCliente}
        onChangeText={setEmailCliente}
      />
      <TouchableOpacity style={styles.botaoEnviar} onPress={buscarCliente}>
        <Text style={styles.textoBotao}>Buscar Cliente</Text>
      </TouchableOpacity>

      {cliente && (
        <View style={styles.clienteBox}>
          <Text style={styles.clienteText}>Nome: {cliente.nome}</Text>
          <Text style={styles.clienteText}>Animal: {cliente.animal}</Text>
          <Text style={styles.clienteText}>Sexo: {cliente.sexoAnimal}</Text>

          <TextInput
            style={[styles.input, { height: 120 }]}
            placeholder="Descrição do exame"
            placeholderTextColor="#888"
            value={descricao}
            onChangeText={setDescricao}
            multiline
          />

          <View style={styles.pdfBox}>
            <Text style={styles.pdfText}>📄 Selecionar PDF (em breve)</Text>
          </View>

          <TouchableOpacity style={styles.botaoEnviar} onPress={enviarExame}>
            <Text style={styles.textoBotao}>Enviar Exame</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.voltar} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.voltarTexto}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

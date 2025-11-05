import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

type RootStackParamList = {
  Home: undefined;
  Consultas: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, "Consultas">;

interface Consulta {
  id: string;
  horario: string;
  data: string;
  disponivel: boolean;
}

export default function Consultas() {
  const navigation = useNavigation<NavigationProp>();
  const [consultas, setConsultas] = useState<Consulta[]>([
    { id: "1", horario: "09:00", data: "05/11/2025", disponivel: true },
    { id: "2", horario: "10:30", data: "05/11/2025", disponivel: false },
    { id: "3", horario: "13:00", data: "06/11/2025", disponivel: true },
  ]);

  const alternarDisponibilidade = (id: string) => {
    setConsultas((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, disponivel: !item.disponivel } : item
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Consultas</Text>

      <FlatList
        data={consultas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.texto}>📅 {item.data}</Text>
              <Text style={styles.texto}>⏰ {item.horario}</Text>
              <Text
                style={[
                  styles.status,
                  { color: item.disponivel ? "green" : "red" },
                ]}
              >
                {item.disponivel ? "Disponível" : "Ocupado"}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.botao}
              onPress={() => alternarDisponibilidade(item.id)}
            >
              <Text style={styles.textoBotao}>Alterar</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.voltar}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.voltarTexto}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

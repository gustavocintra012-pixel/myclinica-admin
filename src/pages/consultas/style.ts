import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2b6cb0",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  texto: {
    fontSize: 16,
    color: "#333",
  },
  status: {
    fontWeight: "bold",
    marginTop: 5,
  },
  botao: {
    backgroundColor: "#2b6cb0",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
  voltar: {
    marginTop: 10,
    alignSelf: "center",
  },
  voltarTexto: {
    color: "#2b6cb0",
    fontWeight: "600",
  },
});

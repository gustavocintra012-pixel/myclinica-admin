import { themas } from "@/src/global/themes";
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
    paddingTop: 90
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: themas.colors.primary,
    marginBottom: 25,
    textAlign: "center",
  },
  input: {
    width: width * 0.9,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  botaoEnviar: {
    width: width * 0.9,
    backgroundColor: themas.colors.primary,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginVertical: 10,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  voltar: {
    marginTop: 25,
    alignSelf: "center",
    color: "#000000ff",
  },
  voltarTexto: {
    color: "#000000ff",
    fontWeight: "600",
    fontSize: 16,
  },
  clienteBox: {
    width: width * 0.95,
    padding: 20,
    backgroundColor: "#f1f5f9",
    borderRadius: 15,
    marginTop: 20,
    alignItems: "center",
  },
  clienteText: {
    fontSize: 16,
    marginBottom: 5,
  },
  pdfBox: {
    width: width * 0.85,
    height: 80,
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    backgroundColor: "#e2e8f0",
  },
  pdfText: {
    color: "#555",
    fontSize: 16,
    textAlign: "center",
  },
});

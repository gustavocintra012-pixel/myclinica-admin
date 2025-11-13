import { themas } from "@/src/global/themes";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: themas.colors.primary,
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 40,
  },

  buttonsContainer: {
    width: "100%",
    alignItems: "center",
  },

  button: {
    backgroundColor: themas.colors.primary,
    width: "80%",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    elevation: 2,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  logoutButton: {
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: "#da3a3aff",
  },

  logoutText: {
    color: "#da3a3aff",
    fontSize: 18,
    fontWeight: "bold",
  },
  botao: {
  backgroundColor: themas.colors.primary,
    width: "80%",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    elevation: 2,
},

textoBotao: {
  color: "#fff",
  fontSize: 18,
  fontWeight: "bold",
},

});

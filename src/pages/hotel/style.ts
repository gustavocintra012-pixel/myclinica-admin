import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafc",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: themas.colors.primary,
  },
  subtitle: {
    marginTop: 5,
    color: "#555",
    fontSize: 15,
  },
  headerButton: {
    flexDirection: "row",
    backgroundColor: themas.colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    alignItems: "center",
    gap: 6,
  },
  headerButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginTop: 15,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 3,
  },
  cardInfo: {
    flex: 1,
  },
  petName: {
    fontSize: 17,
    fontWeight: "600",
    color: "#333",
  },
  info: {
    color: "#666",
    fontSize: 14,
  },
  deleteButton: {
    backgroundColor: themas.colors.primary,
    padding: 8,
    borderRadius: 8,
  },
  addButton: {
    position: "absolute",
    bottom: 25,
    right: 25,
    backgroundColor: themas.colors.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: themas.colors.primary,
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    color: "#333",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  btn: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  btnCancel: {
    backgroundColor: "#ccc",
  },
  btnConfirm: {
    backgroundColor: themas.colors.primary,
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
  },
});

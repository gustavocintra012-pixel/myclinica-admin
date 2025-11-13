import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  header: {
    width: "100%",
    paddingVertical: 30,
    backgroundColor: themas.colors.primary,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 25,
  },

  option: {
    width: "100%",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: themas.colors.lightGray,
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  optionText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
});
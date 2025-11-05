import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
    paddingHorizontal: 30,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  boxTop: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 150,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: themas.colors.primary,
  },
  boxMid: {
    width: '90%',
    marginBottom: 40,
  },
  boxBottom: {
    width: '90%',
    marginTop: 20,
  },
  textBottom: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginTop: 20,
  },
});

import { StyleSheet, Dimensions } from "react-native";
import { themas } from "../../global/themes";

const WINDOW_HEIGHT = Dimensions.get("window").height;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  header: {
    width: "100%",
    height: WINDOW_HEIGHT / 5,
    backgroundColor: themas.colors.primary,
    paddingHorizontal: 20,
    paddingTop: 60,
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    textAlign: 'center',
  },

  /* === calendário / dias === */
  calendarContainer: {
    marginTop: 10,
    height: 140,
  },
  scrollDates: {
    paddingHorizontal: 10,
    alignItems: "center",
  },
  dateBox: {
    width: 110,
    height: 110,
    borderRadius: 16,
    backgroundColor: "#f4f4f4",
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    borderWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedDateBox: {
    borderWidth: 2,
    borderColor: themas.colors.primary,
    backgroundColor: "#E6F0FF",
  },

  dayText: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 6,
    color: "#333",
  },

  dateText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#333",
  },

  /* === horas === */
  hoursContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 18,
  },
  hourButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 2,
  },

  confirmButton: {
    backgroundColor: themas.colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  confirmButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default style;

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { db } from "../../firebase/config";
import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";
import styles from "./style";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

type Booking = {
  id: string;
  petName: string;
  ownerName: string;
  ownerPhone: string;
  checkInDate: string;
  checkOutDate: string;
  specialNeeds: string;
  petWeight: string;
  roomType: string;
  roomPrice: string;
  roomCapacity: string;
  status: "Reservado" | "Concluído" | "Cancelado";
  bookedAt: string;
};

const AdminHotelScreen: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = collection(db, "hotel_reservas");
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data: Booking[] = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      })) as Booking[];
      setBookings(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const updateStatus = async (bookingId: string, newStatus: string) => {
    try {
      await updateDoc(doc(db, "hotel_reservas", bookingId), { status: newStatus });
      Alert.alert("✅ Status atualizado com sucesso!");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível atualizar o status da reserva.");
      console.error(error);
    }
  };

  const renderBookingCard = (item: Booking) => (
    <View
      style={[
        styles.bookingCard,
        item.status === "Reservado"
          ? styles.reservedCard
          : item.status === "Concluído"
          ? styles.completedCard
          : styles.cancelledCard,
      ]}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.petName}>
          🐾 {item.petName} ({item.petWeight})
        </Text>
        <Text style={styles.statusText}>{item.status}</Text>
      </View>

      <Text style={styles.roomType}>🏨 {item.roomType}</Text>

      <View style={styles.infoRow}>
        <FontAwesome5 name="user" size={14} color="#333" />
        <Text style={styles.infoText}> {item.ownerName}</Text>
      </View>

      <View style={styles.infoRow}>
        <MaterialIcons name="phone" size={14} color="#333" />
        <Text style={styles.infoText}> {item.ownerPhone}</Text>
      </View>

      <View style={styles.infoRow}>
        <MaterialIcons name="event" size={14} color="#333" />
        <Text style={styles.infoText}>
          {" "}
          {item.checkInDate} → {item.checkOutDate}
        </Text>
      </View>

      {item.specialNeeds ? (
        <View style={styles.infoRow}>
          <MaterialIcons name="healing" size={14} color="#333" />
          <Text style={styles.infoText}> {item.specialNeeds}</Text>
        </View>
      ) : null}

      <Text style={styles.bookedAt}>📅 Reservado em: {item.bookedAt}</Text>

      {item.status === "Reservado" && (
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={[styles.actionButton, styles.completeButton]}
            onPress={() => updateStatus(item.id, "Concluído")}
          >
            <Text style={styles.buttonText}>Concluir</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, styles.cancelButton]}
            onPress={() => updateStatus(item.id, "Cancelado")}
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text>Carregando reservas...</Text>
      </View>
    );
  }

  const groupedBookings = {
    Reservado: bookings.filter((b) => b.status === "Reservado"),
    Concluído: bookings.filter((b) => b.status === "Concluído"),
    Cancelado: bookings.filter((b) => b.status === "Cancelado"),
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📋 Painel de Reservas</Text>

      {Object.entries(groupedBookings).map(([status, list]) => (
        <View key={status} style={styles.section}>
          <Text style={styles.sectionTitle}>
            {status === "Reservado"
              ? "🕒 Reservas Ativas"
              : status === "Concluído"
              ? "✅ Estádias Concluídas"
              : "❌ Canceladas"}
          </Text>

          {list.length === 0 ? (
            <Text style={styles.emptyText}>Nenhuma reserva {status.toLowerCase()}.</Text>
          ) : (
            <FlatList
              data={list}
              renderItem={({ item }) => renderBookingCard(item)}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default AdminHotelScreen;

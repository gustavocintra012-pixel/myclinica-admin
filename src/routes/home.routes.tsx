import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Schedule from "../pages/consultas";
import home from "../pages/home";

const Stack = createStackNavigator();

export default function HomeRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={home} />
      <Stack.Screen name="Consultas" component={Schedule} />
    </Stack.Navigator>
  );
}

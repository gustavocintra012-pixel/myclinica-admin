import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Login from "../pages/login";
import Cadastro from "../pages/register";
import Home from "../pages/home";
import Consultas from "../pages/consultas";
import Exames from "../pages/exams";
import Hotel from "../pages/hotel";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#FFFFFF" },
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Consultas" component={Consultas} />
      <Stack.Screen name="Exames" component={Exames} />
      <Stack.Screen name="Hotel" component={Hotel} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

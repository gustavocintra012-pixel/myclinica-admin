import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Consultas from "../pages/consultas";
import Exames from "../pages/exams";
import Home from "../pages/home";
import Login from "../pages/login";
import Cadastro from "../pages/register";

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
    </Stack.Navigator>
  );
}

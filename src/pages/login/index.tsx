import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import Logo from "../../assets/logo.png";
import { Button } from "../../components/Button";
import { Input } from "../../components/input";
import { style } from "./styles";

export default function Login() {
  const navigation = useNavigation<NavigationProp<any>>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function getLogin() {
    try {
      setLoading(true);

      if (!email || !password) {
        return Alert.alert("Atenção", "Informe todos os campos obrigatórios");
      }

      if (email === "gustavo@adm.com" && password === "123456") {
        navigation.reset({ routes: [{ name: "Home" }] });
      } else {
        Alert.alert("Atenção", "Email ou senha inválidos");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        <Text style={style.text}>Painel do Administrador</Text>
      </View>

      <View style={style.boxMid}>
        <Input
          value={email}
          onChangeText={setEmail}
          title="E-MAIL ADMINISTRATIVO"
          IconRight={MaterialIcons}
          IconRightName="email"
        />

        <Input
          value={password}
          onChangeText={setPassword}
          title="SENHA"
          secureTextEntry={!showPassword}
          IconRight={Octicons}
          IconRightName={showPassword ? "eye" : "eye-closed"}
          onIconRightPress={() => setShowPassword(!showPassword)}
        />
      </View>

      <View style={style.boxBottom}>
        <Button text="ENTRAR" loading={loading} onPress={getLogin} />
      </View>

      <Text style={style.textBottom}>
        Acesso restrito ao administrador
      </Text>
    </View>
  );
}

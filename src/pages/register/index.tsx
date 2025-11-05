import { style } from "../login/styles";
import Logo from "../../assets/logo.png";
import { themas } from "../../global/themes";
import { Input } from "../../components/input";
import React, { useRef, useState } from "react";
import { Button } from "../../components/Button";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import {ScrollView,Text,View,Image,Alert,Keyboard,TouchableWithoutFeedback,KeyboardAvoidingView,Platform,} from "react-native";

export default function Cadastro() {
  const navigation = useNavigation<NavigationProp<any>>();
  const scrollRef = useRef<ScrollView>(null);

  const [nome,setNome]=useState("");
  const [sobrenome,setSobrenome]= useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [telefone,setTelefone]=useState("");
  const [cidade,setCidade]=useState("");
  const [estado,setEstado]=useState("");
  const [loading,setLoading]=useState(false);

  async function handleCadastro(){
    try {
      setLoading(true);
      if (!nome || !sobrenome || !email || !password || !telefone || !cidade || !estado) {
        return Alert.alert("Atenção", "Preencha todos os campos!");
      }

      Alert.alert("Sucesso!","Cadastro realizado com sucesso!");
      navigation.reset({ routes:[{ name:"Login"}]});
    } catch(error){
      console.log(error);
    } finally{
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "transparent" }}
      behavior={Platform.OS === "ios"? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          ref={scrollRef}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            padding: 30,
            backgroundColor: themas.colors.transparent,
          }}
        >
          <View style={{ alignItems: "center", marginBottom: 30 }}>
            <Image source={Logo} style={style.logo} resizeMode="contain" />
            <Text style={style.text}>Crie sua conta!</Text>
          </View>

          <Input
            value={nome}
            onChangeText={setNome}
            title="NOME"
            IconRight={MaterialIcons}
            IconRightName="person"
            onFocus={() => {
              scrollRef.current?.scrollTo({ y: 0, animated: true });
            }}
          />
          <Input
            value={sobrenome}
            onChangeText={setSobrenome}
            title="SOBRENOME"
            IconRight={MaterialIcons}
            IconRightName="person"
            onFocus={() => {
              scrollRef.current?.scrollTo({ y: 100, animated: true });
            }}
          />
          <Input
            value={email}
            onChangeText={setEmail}
            title="E-MAIL"
            IconRight={MaterialIcons}
            IconRightName="email"
            onFocus={() => {
              scrollRef.current?.scrollTo({ y: 206, animated: true });
            }}
          />
          <Input
            value={password}
            onChangeText={setPassword}
            title="SENHA"
            IconRight={MaterialIcons}
            IconRightName="password"
            onFocus={() => {
              scrollRef.current?.scrollTo({ y: 310, animated: true });
            }}
          />
          <Input
            value={password}
            onChangeText={setPassword}
            title="CONFIRMAÇÃO DE SENHA"
            IconRight={MaterialIcons}
            IconRightName="password"
            onFocus={() => {
              scrollRef.current?.scrollTo({ y: 410, animated: true });
            }}
          />
          <Input
            value={telefone}
            onChangeText={setTelefone}
            title="TELEFONE"
            IconRight={MaterialIcons}
            IconRightName="phone"
            onFocus={() => {
              scrollRef.current?.scrollTo({ y: 310, animated: true });
            }}
          />
          <Input
            value={cidade}
            onChangeText={setCidade}
            title="CIDADE"
            IconRight={MaterialIcons}
            IconRightName="location-city"
            onFocus={() => {
              scrollRef.current?.scrollTo({ y: 416, animated: true });
            }}
          />
          <Input
            value={estado}
            onChangeText={setEstado}
            title="ESTADO"
            IconRight={MaterialIcons}
            IconRightName="location-on"
            onFocus={() => {
              scrollRef.current?.scrollTo({ y: 516, animated: true });
            }}
          />

          <View style={{ marginTop: 20, alignItems: "center" }}>
            <Button text="CADASTRAR" loading={loading} onPress={handleCadastro} />
            <Text
              style={{
                textAlign: "center",
                marginTop: 15,
                fontSize: 16,
                color: "#333",
              }}
            >
              Já tem uma conta?{" "}
              <Text
                style={{ color: themas.colors.primary }}
                onPress={() => navigation.navigate("Login")}
              >
                Faça login!
              </Text>
            </Text>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

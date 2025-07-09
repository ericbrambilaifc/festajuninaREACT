import React, { useState } from "react";
import {Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen() {
  const [name, setName] = useState("");
  const [codigo, setCodigo] = useState("");

  const fazerLogin = () => {
    console.log("Nome:", name);
    console.log("Codigo:", codigo);
  };

  const fazerLoginGhest = () => {
    console.log("Entrar sem login");
  };

  return (
    <LinearGradient colors={["#0D6B57", "#FFA726"]} style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.containerSub}
      >
        <Text style={styles.titulo}>FESTA JUNINA</Text>
        <Text style={styles.subTitulo}>IFC - VIDEIRA</Text>

        <TextInput
          style={styles.input}
          placeholder="insira seu nome"
          placeholderTextColor="#d0f2d4"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="insira seu código de convite"
          placeholderTextColor="#d0f2d4"
          value={codigo}
          onChangeText={setCodigo}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={fazerLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={fazerLoginGhest}>
          <Text style={styles.guestText}>entrar sem login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerSub: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    lineHeight: 38, 
  },
  subTitulo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 40,
    textAlign: "center",
    lineHeight: 38,
  },
  input: {
    width: 256,
    height: 26,
    backgroundColor: "#005C46",
    fontSize: 12,
    borderRadius: 13,
    paddingHorizontal: 10,
    paddingVertical: 0,
    color: "#CFCFCF",
    marginBottom: 15,
    textAlignVertical: "center",
  },

  button: {
    width: 256,
    backgroundColor: "#005C46",
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  guestText: {
    marginTop: 10,
    marginLeft: 155,
    color: "#fff",
    fontSize: 12,
  },
});

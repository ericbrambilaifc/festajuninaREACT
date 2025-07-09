import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView // Adicionado para permitir rolagem se o conteúdo for maior que a tela
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useRoute } from "@react-navigation/native"; // Importe useNavigation e useRoute

export default function CorreioElegante() {
  const navigation = useNavigation();
  const route = useRoute(); // Para acessar os parâmetros da rota, se houver
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("");

  // Obtenha os parâmetros userName e inviteCode, se passados da tela Home
  const { userName, inviteCode } = route.params || { userName: 'Usuário', inviteCode: 'Não Informado' };

  const handleSendMessage = () => {
    console.log("Mensagem enviada:", message);
    console.log("Destinatário:", recipient);
    // Aqui você implementaria a lógica para enviar a mensagem
    alert("Mensagem enviada com sucesso!"); // Use um modal personalizado em produção
    setMessage("");
    setRecipient("");
  };

  const navigateToHome = () => {
    navigation.navigate('Home', { userName, inviteCode }); // Retorna para a Home, passando os mesmos dados
  };

  const handleReceivedMessages = () => {
    // Lógica para ver mensagens recebidas
    alert("Funcionalidade de Mensagens Recebidas em desenvolvimento!"); // Use um modal personalizado em produção
  };

  return (
    <LinearGradient colors={["#0D6B57", "#FFA726"]} style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingContainer}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.header}>
            <View>
              <Text style={styles.greetingText}>Olá {userName}</Text>
              <Text style={styles.inviteCodeText}>Código de convite {inviteCode}</Text>
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={navigateToHome}
                >
                  <Text style={styles.buttonText}>Ir para comida ↗</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.secondaryButton]}
                  onPress={handleReceivedMessages}
                >
                  <Text style={styles.secondaryButtonText}>Mensagens recebidas ✉️</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.logoContainer}>
              <Text style={styles.logoText}>logo</Text>
            </View>
          </View>

          <TextInput
            placeholder="Escreva sua mensagem secreta"
            placeholderTextColor="#d0f2d4"
            multiline
            numberOfLines={5} // Define o número inicial de linhas
            value={message}
            onChangeText={setMessage}
            style={styles.messageInput}
            textAlignVertical="top" // Alinha o texto no topo para multiline
          />

          <TextInput
            placeholder="Escolha o destinatário"
            placeholderTextColor="#d0f2d4"
            value={recipient}
            onChangeText={setRecipient}
            style={styles.recipientInput}
          />

          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleSendMessage}
          >
            <Text style={styles.sendButtonText}>Enviar</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 20,
    paddingTop: Platform.OS === 'android' ? 40 : 20, // Ajuste para Android para evitar sobreposição da status bar
    justifyContent: "space-between", // Para empurrar o botão Enviar para baixo
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  greetingText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#fff",
  },
  inviteCodeText: {
    color: "#fff",
    fontSize: 16,
    marginTop: 5,
  },
  buttonGroup: {
    flexDirection: "row",
    marginTop: 10,
    gap: 10, // Espaçamento entre os botões
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff", // Borda branca para o botão principal
    backgroundColor: "transparent", // Fundo transparente
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
  secondaryButton: {
    backgroundColor: "#111", // Fundo preto para o botão secundário
    borderColor: "#111", // Borda preta
  },
  secondaryButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  logoContainer: {
    backgroundColor: "#2d4a97",
    width: 60,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 16,
  },
  messageInput: {
    width: "100%",
    height: 120,
    borderRadius: 15,
    borderWidth: 0, // Remover borda padrão
    padding: 15,
    fontSize: 14,
    marginBottom: 15,
    backgroundColor: "#013926",
    color: "#fff",
  },
  recipientInput: {
    width: "100%",
    height: 35,
    borderRadius: 15,
    borderWidth: 0, // Remover borda padrão
    paddingHorizontal: 15,
    fontSize: 14,
    marginBottom: 25,
    backgroundColor: "#013926",
    color: "#fff",
  },
  sendButton: {
    width: "100%",
    height: 45,
    backgroundColor: "#013926",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 'auto', // Empurra o botão para o final da tela
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

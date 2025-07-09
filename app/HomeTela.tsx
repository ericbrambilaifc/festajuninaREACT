import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView // Adicionado para permitir rolagem se o conteúdo for maior que a tela
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native"; // Importe useRoute e useNavigation
import { LinearGradient } from "expo-linear-gradient"; // Para o fundo com gradiente, se desejar manter

// Dados das comidas (mantidos como estão)
const comidas = [
  { nome: "Pé-de-moleque", img: "https://placehold.co/100x100/005C46/FFFFFF?text=Pe-de-moleque" }, // Imagens de placeholder
  { nome: "Pamonha", img: "https://placehold.co/100x100/005C46/FFFFFF?text=Pamonha" },
  { nome: "Maça do Amor", img: "https://placehold.co/100x100/005C46/FFFFFF?text=Maca+do+Amor" },
  { nome: "Canjica", img: "https://placehold.co/100x100/005C46/FFFFFF?text=Canjica" },
  { nome: "Pinhão", img: "https://placehold.co/100x100/005C46/FFFFFF?text=Pinhao" },
  { nome: "Quentão", img: "https://placehold.co/100x100/005C46/FFFFFF?text=Quentao" },
];

export default function HomeTela() { // Alterado para export default e renomeado para HomeTela
  const route = useRoute(); // Hook para acessar os parâmetros da rota
  const navigation = useNavigation(); // Hook para navegar

  // Obtenha os parâmetros userName e inviteCode
  const { userName, inviteCode } = route.params || { userName: 'Convidado', inviteCode: 'Não Informado' }; // Fallback para caso não haja params

  const navigateToCorreio = () => {
    // Aqui você navegaria para a tela de Correio Elegante
    // Certifique-se de que 'Correio' esteja definida no seu Stack.Navigator no App.js
    navigation.navigate('Correio', { userName, inviteCode });
  };

  return (
    <LinearGradient colors={["#0D6B57", "#FFA726"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greetingText}>
              Olá {userName} <Text style={{ fontSize: 24 }}>🧢</Text> {/* Ícone de boné */}
            </Text>
            <Text style={styles.inviteCodeText}>Código de convite {inviteCode}</Text>
            <TouchableOpacity
              style={styles.correioButton}
              onPress={navigateToCorreio}
            >
              <Text style={styles.correioButtonText}>Ir para correio elegante ↗</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>logo</Text>
          </View>
        </View>

        <View style={styles.gridContainer}>
          {comidas.map(({ nome, img }) => (
            <View key={nome} style={styles.foodItem}>
              <Image
                source={{ uri: img }}
                style={styles.foodImage}
                onError={() => console.log(`Erro ao carregar imagem para ${nome}`)} // Tratamento de erro para imagem
              />
              <View style={styles.foodOverlay}>
                <Text style={styles.foodName}>{nome}</Text>
                <TouchableOpacity style={styles.infoIcon}>
                  <Text style={styles.infoIconText}>ℹ️</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 20,
    paddingTop: Platform.OS === 'android' ? 40 : 20, // Ajuste para Android para evitar sobreposição da status bar
    flexGrow: 1, // Permite que o conteúdo se expanda para preencher o ScrollView
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
  correioButton: {
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: "#005C46", // Cor de fundo para o botão
    alignSelf: 'flex-start', // Para o botão não ocupar toda a largura
  },
  correioButtonText: {
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
  gridContainer: {
    flexDirection: "row", // Usar flexbox para o grid
    flexWrap: "wrap", // Quebrar linha para múltiplos itens
    justifyContent: "space-between", // Espaço entre os itens
    gap: 15, // Espaçamento entre os itens (React Native 0.71+ suporta 'gap')
    // Fallback para versões mais antigas ou se 'gap' não funcionar como esperado:
    // marginHorizontal: -7.5, // Metade do gap para compensar padding/margin dos itens
  },
  foodItem: {
    width: "48%", // Aproximadamente metade da largura com espaço para o gap
    borderRadius: 10,
    overflow: "hidden", // Garante que a imagem respeite o borderRadius
    marginBottom: 15, // Espaçamento vertical entre as linhas
    backgroundColor: "#005C46", // Fundo do item de comida
  },
  foodImage: {
    width: "100%",
    height: 100,
    resizeMode: "cover", // Garante que a imagem preencha o espaço
    borderRadius: 10, // Arredondar cantos da imagem
  },
  foodOverlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row', // Para alinhar nome e ícone na mesma linha
    justifyContent: 'space-between', // Espaço entre nome e ícone
    alignItems: 'center',
  },
  foodName: {
    color: "#fff",
    fontSize: 14,
  },
  infoIcon: {
    // Estilos para o TouchableOpacity do ícone de informação
    padding: 5, // Aumenta a área de toque
  },
  infoIconText: {
    color: "#fff",
    fontSize: 14,
  },
});

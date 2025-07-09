// App.js (ou seu arquivo de navegação principal)
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importe seus componentes com os nomes corretos.
// Certifique-se de que 'LoginTela' e 'HomeTela' são os nomes que você exporta por padrão
// em seus respectivos arquivos (ex: export default function LoginTela() { ... }).
import LoginTela from './app/Login'; // Caminho para sua tela de Login
import HomeTela from './app/home';   // Caminho para sua tela Home

// Importe RootStackParamList. É crucial que esta interface seja a mesma
// que você definiu e exportou em 'LoginScreen.js' (ou um arquivo de tipos separado).
// Se você não exportou RootStackParamList do LoginScreen.js, considere movê-la
// para um arquivo como 'src/types/navigation.ts' e importá-la de lá.
import { RootStackParamList } from './LoginScreen'; // <-- Verifique se 'LoginScreen' é o nome correto do arquivo que exporta isso.

// Adicione o tipo RootStackParamList ao createStackNavigator para tipagem segura
const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Definição da tela de Login */}
        <Stack.Screen
          name="Login"
          component={LoginTela} // Use o nome do componente importado
          options={{ headerShown: false }} // Esconde o cabeçalho na tela de login
        />

        {/* Definição da tela Home - ESTA É A PARTE CRÍTICA */}
        <Stack.Screen
          name="Home"
          component={HomeTela} // Use o nome do componente importado
        />

        {/* Se você tiver uma tela 'Correio', adicione-a aqui também: */}
        {/* <Stack.Screen name="Correio" component={CorreioTela} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

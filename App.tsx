import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import 'react-native-url-polyfill/auto'

import HomeScreen from "./screens/HomeScreen"

export type RootStackParamList = {
  Home: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          options={{
            headerShown: false
          }}
          name="Home" 
          component={HomeScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

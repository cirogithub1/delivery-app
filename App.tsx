import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import 'react-native-url-polyfill/auto'

import HomeScreen from "./screens/HomeScreen"
import RestaurantScreen from "./screens/RestaurantScreen"

export type RootStackParamList = {
  Home: undefined
  Restaurant: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          options={{headerShown: false}}
          name="Home" 
          component={HomeScreen}/>
        
        <Stack.Screen 
          options={{headerShown: false}}
          name="Restaurant" 
          component={RestaurantScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

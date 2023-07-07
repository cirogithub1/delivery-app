import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import 'react-native-url-polyfill/auto'

import HomeScreen from "./screens/HomeScreen"
import RestaurantScreen from "./screens/RestaurantScreen"

interface RestaurantProps {
	id: string
	imgUrl: string
	title: string
	rating: string
	genre: string
	address: string
	short_description: string
	dishes: string
	long: string
	lat: string
}

export type RootStackParamList = {
  Home: undefined
  Restaurant: RestaurantProps | undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          options={{headerShown: false}}
          name="Home" 
          component={HomeScreen}/>
        
        <Stack.Screen 
          options={{headerShown: false}}
          name="Restaurant"
          component={RestaurantScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

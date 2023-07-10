import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import 'react-native-url-polyfill/auto'

import { store } from './store'
import { Provider } from 'react-redux'

import HomeScreen from "./screens/HomeScreen"
import RestaurantScreen from "./screens/RestaurantScreen"
import BasketScreen from "./screens/BasketScreen"
import PreparingOrderScreen from "./screens/PreparingOrderScreen"
import { Colors } from "./constants/colors"
import DeliveryScreen from "./screens/DeliveryScreen"

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

interface DishProps {
  id: string
  name: string
  short_description: string
  price: number
  image: string
}

export type RootStackParamList = {
  Home: undefined
  PreparingOrder: undefined
  Delivery: undefined
  Restaurant: RestaurantProps | undefined
  Basket: DishProps | undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            statusBarStyle: "dark",
            headerShown: false, 
            navigationBarHidden: true, 
            statusBarHidden: true,
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
          />
          
          <Stack.Screen 
            name="Restaurant"
            component={RestaurantScreen}
          />
          
          <Stack.Screen 
            name="Basket"
            component={BasketScreen}
            options={{
              presentation: "modal"
            }}
          />

          <Stack.Screen 
            name="PreparingOrder"
            component={PreparingOrderScreen}
            options={{
              presentation: "fullScreenModal",
              // navigationBarHidden: true,
              // statusBarHidden: true,
              // navigationBarColor: Colors.teal_550,
              // statusBarColor: Colors.teal_550,
            }}
          />

          <Stack.Screen 
            name="Delivery"
            component={DeliveryScreen}
            options={{
              presentation: "fullScreenModal",
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}
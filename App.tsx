import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import 'react-native-url-polyfill/auto'

import { store } from './store'
import { Provider } from 'react-redux'

import HomeScreen from "./screens/HomeScreen"
import RestaurantScreen from "./screens/RestaurantScreen"
import BasketScreen from "./screens/BasketScreen"

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
            headerShown: false, 
            navigationBarHidden: true, 
            statusBarHidden: true,
          }}
        >
          <Stack.Screen 
            // options={{headerShown: false}}
            name="Home" 
            component={HomeScreen}
          />
          
          <Stack.Screen 
            // options={{
            //   statusBarHidden: true
            // }}
            name="Restaurant"
            component={RestaurantScreen}
          />
          
          <Stack.Screen 
            // options={{headerShown: false}}
            name="Basket"
            component={BasketScreen}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}
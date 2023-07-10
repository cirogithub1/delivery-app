import { useState, useMemo } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { Ionicons } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

//@ts-ignore
import logo from "../assets/delivery_scooter.png"

import { ripFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { selectRestaurant } from '../features/restaurantSlice'
import { Colors } from '../constants/colors'
import { urlFor } from '../sanity'
import { currencyFormat } from '../utils/currency-format'

export type NavigationProps = NativeStackNavigationProp<
	RootStackParamList, 
	"Basket" ///this is the name of the screen where i'm gonna return
> 

const BasketScreen = () => {
	const navigation = useNavigation<NavigationProps>()
	const restaurant = useSelector(selectRestaurant)
	const items = useSelector(selectBasketItems)
	const dispatch = useDispatch()
	const basketTotal = useSelector(selectBasketTotal)

	const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
	// console.log(JSON.stringify(groupedItemsInBasket))
	// console.log(JSON.stringify(restaurant))

	useMemo(() => {
		const groupedItems = items.reduce((results: any, item: any) => {
			(results[item.id] = results[item.id] || []).push(item)
			return results
		}, {})

		setGroupedItemsInBasket(groupedItems)
	}, [items])

	return (
		<SafeAreaView className='flex-1 bg-white'>
			<View className='flex-1 bg-gray-100'>
				<View className='p-3 border-b border-cyan-500 bg-white shadow-xs'>
					<View>
						<Text className='text-center text-lg font-bold'>Basket</Text>
						<Text className='text-center text-gray-400'>{restaurant.title}</Text>
					</View>

					<TouchableOpacity
						className='rounded-full bg-gray-100 absolute top-3 right-3'
						onPress={navigation.goBack}
					>
						<Ionicons name="close-circle" size={40} color={Colors.cyan_600}/>

					</TouchableOpacity>
				</View>

				<View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
					<Image 
						className='h-7 w-7 bg-gray-300 p-4 rounded-full'
						source={logo}
					/>

					<Text className='flex-1'>Delivery in around 60 min</Text>

					<TouchableOpacity>
						<Text className="text-cyan-500">Charge</Text>
					</TouchableOpacity>
				</View>

				<ScrollView className='divide-y divide-gray-200'>
					{Object.entries(groupedItemsInBasket).map(([key, items]:any) => (
						<View key={key}
							className='flex-row items-center space-x-4 px-4 py-2 bg-white my-0'>
							<Text className='font-extrabold'>{items.length}  x</Text>

							<Image 
								className='h-14 w-14 rounded-full'
								source={{
									uri: urlFor(items[0].image).url()
								}}/>
							
							<Text className='flex-1'>{items[0].name}</Text>

							<Text className='text-gray-600'>
								{currencyFormat(items[0].price)} 
							</Text>

							<TouchableOpacity>
								<Text
									className='text-cyan-500 text-xs'
									onPress={() => dispatch(ripFromBasket({ id: key }))}
								>
									Remove
								</Text>
							</TouchableOpacity>
						</View>
					))}
				</ScrollView>

				{/* Totals */}
				<View className='px-6 py-2 bg-white space-y-2'>
					<View className='flex-row justify-between'>
						<Text className='text-gray-400'>Subtotal</Text>

						<Text className='text-gray-400'>
							{currencyFormat(basketTotal)}
						</Text>
					</View>

					<View className='flex-row justify-between'>
						<Text className='text-gray-400'>Delivery</Text>

						<Text className='text-gray-400'>
							{currencyFormat(basketTotal * .1)}
						</Text>
					</View>

					<View className='flex-row justify-between'>
						<Text className=''>Order Total</Text>

						<Text className='font-extrabold'>
							{currencyFormat(basketTotal * 1.1)}
						</Text>
					</View>

					<TouchableOpacity 
						className='rounded-lg bg-cyan-400 p-3'
						onPress={() => navigation.navigate("PreparingOrder")}
					>
						<Text className='text-center text-lg text-pink-500'>
							Place Order
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default BasketScreen
import { useEffect } from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'

import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { urlFor } from '../sanity';
import { Colors } from '../constants/colors';

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

import DishRow from '../components/DishRow';
import BasketBanner from '../components/BasketBanner';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';

export type NavigationProps = NativeStackNavigationProp<
	RootStackParamList, 
	"Restaurant"
> 

interface Props {
	id: string;
	imgUrl: string;
	title: string;
	rating: number;
	genre: string;
	address: string;
	short_description: string;
	dishes: string[];
	long: number;
	lat: number;
}
const RestaurantScreen = () => {
	const route: RouteProp<{params: Props}, 'params'> = useRoute()
	const { 
		params: {
			id,
			imgUrl, 
			title, 
			rating, 
			genre, 
			address, 
			short_description, 
			dishes, 
			long, 
			lat
	}} = route
	const navigation = useNavigation<NavigationProps>()
	
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(
			setRestaurant({
				id,
				imgUrl, 
				title, 
				rating, 
				genre, 
				address, 
				short_description, 
				dishes
			})
		)
	}, [])
		
	return (
		<>
			<BasketBanner />

			<ScrollView>
				<View>
					<Image 
						className='w-full h-52 bg-gray-300 p-4'
						source={{
							uri: urlFor(imgUrl).url()
						}}
					/>

					<TouchableOpacity 
						className='absolute top-8 left-5 p-2 bg-gray-100 rounded-full'
						onPress={navigation.goBack}>
						<Ionicons name='arrow-back-outline' size={20} color={Colors.blue_400} />
					</TouchableOpacity>
				</View>

				<View className='bg-white'>
					<View className='px-2 pt-2'>
						<Text className='text-3xl font-bold'>{title}</Text>

						<View className='flex-row space-x-2 my-1'>
							<View className='flex-row items-center space-x-1'>
								<Ionicons name="star" color={Colors.amber_300} size={20}/>

								<Text className='text-xs text-gray-400'>
									<Text className='text-green-500'>{rating}</Text>
									- {genre}
								</Text>
							</View>

							<View className='flex-row items-center space-x-1'>
								<Ionicons name='location-outline' size={20} color={Colors.gray_400} />

								<Text className='text-xs text-gray-400'>
									Nerby - {address}
								</Text>
							</View>
						</View>

						<Text className='text-xs text-gray-500 mt-2 pb-4'>{short_description}</Text>
					</View>

					<TouchableOpacity className='flex-row items-center space-x-2 p-2 border-y border-gray-300'>
						<Ionicons name='help-circle-outline' size={20} color={Colors.gray_400} />

						<Text className='pl-2 flex-1 text-xs font-extrabold'>
							Do you have any food allergy ?
						</Text>
					</TouchableOpacity>
				</View>

				<View className='pb-36'>
					<Text className="text-base px-2 py-2 mb-1 font-extrabold text-center"> Menu</Text>

					{/* Dishes */}
					{dishes.map((dish:any) => (
						<DishRow 
							key={dish._id}
							id = {dish._id}
							name = {dish.name}
							description = {dish.short_description}
							price = {dish.price}
							image = {dish.image}/>
					))}
				</View>
			</ScrollView>
		</>
	)
}

export default RestaurantScreen
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { Colors } from '../constants/colors'
import { urlFor } from '../sanity'

interface Props {
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

const RestaurantCard = ({ 
	id, 
	imgUrl, 
	title, 
	rating, 
	genre, 
	address, 
	short_description, 
	dishes, 
	long, 
	lat }: Props) => {

	return (
		<TouchableOpacity className="bg-white mr-2 shadow-lg shadow-gray-600 rounded-sm">
			<Image 
				className='h-32 w-56 rounded-t-sm'
				source={{
					uri: urlFor(imgUrl).url()
				}}
				style={{resizeMode: "cover"}} />

			<View className='px-3 pb-3'>
				<Text className='font-bold text-lg pt-1'>{title}</Text>

				<View className='flex-row items-center space-x-1'>
					<Ionicons name='star' size={20} color={Colors.amber_300} 
					/>

					<Text className='text-xs text-gray-500'>
						<Text className='text-green-500'>{rating}</Text> - {genre}
					</Text>
				</View>

				<View className='flex-row items-center space-x-1'>
					<Ionicons name='location-outline' size={22} color={Colors.gray_400} />

					<Text className='text-xs text-gray-500'>Nearby - {address.substring(0, 17)}</Text>
					
				</View>
			</View>
		</TouchableOpacity>
	)
}

export default RestaurantCard
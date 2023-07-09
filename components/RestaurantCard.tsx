import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { Colors } from '../constants/colors'
import { urlFor } from '../sanity'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

export type NavigationProps = NativeStackNavigationProp<
	RootStackParamList, 
	"Home" ///this is the name of the screen where i'm gonna return
> 
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
		const navigation = useNavigation<NavigationProps>()

	return (
		<TouchableOpacity 
			className="bg-white mr-2 shadow-lg shadow-gray-600 rounded-sm"
			onPress={() => {navigation.navigate("Restaurant", {
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
				}
			)}}		
		>
			<Image 
				className='h-32 w-56 rounded-t-sm'
				source={{
					uri: urlFor(imgUrl).url()
				}}
				style={{resizeMode: "cover"}} />

			<View className='px-3 pb-3'>
				<Text className='font-bold text-lg pt-1'>{title}</Text>

				<View className='flex-row items-center space-x-1'>
					<Ionicons name='star' size={20} color={Colors.amber_300} />

					<Text className='text-xs text-gray-500'>
						<Text className='text-green-500'>{rating}</Text> - {genre}
					</Text>
				</View>

				<View className='flex-row items-center space-x-1'>
					<Ionicons name='location-outline' size={20} color={Colors.gray_400} />

					<Text className='text-xs text-gray-500'>Nearby - {address.substring(0, 17)}</Text>
					
				</View>
			</View>
		</TouchableOpacity>
	)
}

export default RestaurantCard
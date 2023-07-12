import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
// import MapView, { Marker } from 'react-native-maps'

import { useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { useNavigation } from '@react-navigation/native'

import * as Progress from 'react-native-progress'

//@ts-ignore
import logo from "../assets/delivery_scooter.png"
import { Colors } from '../constants/colors'

export type NavigationProps = NativeStackNavigationProp<
	RootStackParamList, 
	"Home">

const DeliveryScreen = () => {
	const navigation = useNavigation<NavigationProps>()
	const restaurant = useSelector(selectRestaurant)

	return (
		<View className='flex-1 bg-cyan-400'>
			<SafeAreaView className='z-10'>
				<View className='flex-row justify-between items-center p-5'>
					<View className='border-cyan-400 shadow-xl shadow-black'>
						<TouchableOpacity 
							onPress={() => navigation.navigate('Home')}>
								<Text className='text-white text-2xl font-extrabold px-1 py-0'>
									x
								</Text>
								{/* <Ionicons name='close-outline' size={34} color="white" /> */}
						</TouchableOpacity>
					</View>

					<Text className='text-white text-base font-light'>Order Help</Text>
				</View>

				<View className="bg-white mx-3 my-2 rounded-md p-6 z-10 border-white shadow-xl shadow-black">
					<View className="flex-row justify-between"> 
						<View>
							<Text className="text-base text-gray-400">Estimated arrival</Text>
							<Text className="text-2xl font-bold">45 - 55 minutes</Text>
						</View>

						<Image 
							className='h-20 w-20'
							source={logo}/>
					</View>
	
					<Progress.Bar color={Colors.cyan_300} indeterminate={true} />

					<Text className='mt-2 text-gray-400'>
						Your order at {restaurant.title} is being prepared
					</Text>
				</View>

			</SafeAreaView>

			{/* <MapView
				className='flex-1 -mt-10 z-0'
				initialRegion={{
					latitude: restaurant.lat,
					latitudeDelta: 0.005,
					longitude: restaurant.long,
					longitudeDelta: 0.005
				}}
				mapType='mutedStandard'
			>
				<Marker 
					coordinate={{
						latitude: restaurant.lat,
						longitude: restaurant.long
					}}
					title={restaurant.title}
					description={restaurant.short_description}
					identifier="origin"
					pinColor={Colors.cyan_300}
				/>
			</MapView> */}

			<SafeAreaView className='bg-white flex-row items-center space-x-5 h-28'>
				<Image 
					className='h-12 w-12 bg-gray-300 rounded-full ml-5'
					source={logo}
				/>

				<View className='flex-1'>
					<Text className='text-lg'>Rosy Dominguez</Text>
					<Text className='text-gray-400'>Your Rider</Text>
				</View>

				<Text className='text-lg text-cyan-400 mr-5 font-extrabold'>Call</Text>
			</SafeAreaView>
		</View>
	)
}

export default DeliveryScreen
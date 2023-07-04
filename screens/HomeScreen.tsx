import { SafeAreaView, View, Text, Image, TextInput, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { Colors } from '../constants/colors'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'

// import { UserIcon, ChevronDownIcon,   } from "react-native-heroicons/outline"

const HomeScreen = () => {
	return (
		<SafeAreaView className='bg-white pt-8'>
		
			{/* Header */}
			<View className="flex-row pb-3 items-center mx-4 space-x-2 px-1">
				<Image 
					className='h-7 w-7 bg-gray-300 rounded-full'
					source={{
						uri: "https://links.papareact.com/wru"
					}}/>

				<View className='flex-1'>
					<Text className='font-bold text-gray-400 text-xs'>
						Deliver Now
					</Text>
					<Text className='font-bold text-xl'>
						Current location

						<Ionicons name='chevron-down-outline' size={20} color={`${Colors.blue_400}`} />
					</Text>
				</View>

				<Ionicons name='person-circle-outline' size={30} color={`${Colors.blue_400}`} />
			</View>

			{/* Search bar */}
			<View className="flex-row items-center space-x-2 pb-2 mx-4 px-1">
				<View className='flex-row flex-1 space-x-2 bg-gray-200 rounded-lg'>
					<Ionicons name='search-outline' size={25} color={`${Colors.gray_500}`} />

					<TextInput 
						placeholder='Restaurants and cuisines'
						keyboardType='default'/>
				</View>

				<Ionicons name='options-outline' size={25} color={`${Colors.blue_400}`} />

			</View>

			{/* Body */}
			<ScrollView
				contentContainerStyle={{
					paddingBottom: 100
				}}>
				{/* categories */}
				<Categories />

				{/* featured */}
				<FeaturedRow 
					id="1"
					title="featured" 
					description='Paid placements from our partners' />
				<FeaturedRow 
					id="2"
					title="Tasty Discounts" 
					description='Everyone`s favorite dishes' />
				<FeaturedRow 
					id="3"
					title="offers near you" 
					description='Support your local restaurants tonight!' />
			</ScrollView>
		
		</SafeAreaView>
	)
}

export default HomeScreen
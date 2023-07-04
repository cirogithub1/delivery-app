import { View, Text, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { Colors } from "../constants/colors"
import RestaurantCard from './RestaurantCard'

interface Props {
	id: string
	title: string
	description: string
}

const FeaturedRow = ({ id, title, description }: Props) => {
	return (
		<View>
			<View className="mt-4 flex-row items-center justify-between px-4">
				<Text className='font-bold text-lg'>{title}</Text>
				
				<Ionicons name='arrow-forward-outline' size={20} color={`${Colors.blue_400}`} />
			</View>

			<Text className="text-xs text-gray-500 px-4">{description}</Text>

			<ScrollView
				className='pt-4'
				horizontal
				contentContainerStyle={{
					paddingHorizontal: 15
				}}	
				showsHorizontalScrollIndicator={false}>
					{/* Restaurants Cards */}
					<RestaurantCard 
						id = "id"
						imgUrl = "https://www.themealdb.com/images/media/meals/y7h0lq1683208991.jpg"
						title = "title"
						rating = "rating"
						genre = "genre"
						address = "address"
						short_description = "short_description"
						dishes = "dishes"
						long = "long"
						lat = "lat"
					/>
					
					<RestaurantCard 
						id = "id"
						imgUrl = "https://www.themealdb.com/images/media/meals/y7h0lq1683208991.jpg"
						title = "title"
						rating = "rating"
						genre = "genre"
						address = "address"
						short_description = "short_description"
						dishes = "dishes"
						long = "long"
						lat = "lat"
					/>

					<RestaurantCard 
						id = "id"
						imgUrl = "https://www.themealdb.com/images/media/meals/y7h0lq1683208991.jpg"
						title = "title"
						rating = "rating"
						genre = "genre"
						address = "address"
						short_description = "short_description"
						dishes = "dishes"
						long = "long"
						lat = "lat"
					/>

			</ScrollView>
		</View>
	)
}

export default FeaturedRow
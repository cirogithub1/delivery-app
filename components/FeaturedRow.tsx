import { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { Colors } from "../constants/colors"
import RestaurantCard from './RestaurantCard'

import sanityClient from "../sanity"

interface Props {
	id: string
	title: string
	description: string
}

const FeaturedRow = ({ id, title, description }: Props) => {
	const [restaurants, setRestaurants] = useState([])

	useEffect(() => {
		sanityClient
			.fetch(`
				*[_type == "featured" && _id == $id] {
					...,
					restaurants[]-> {
						...,
						dishes[]->,
						type-> {
							name
						}
					}
				}[0]
			`, { id: id })
			.then((data:any) => {
				setRestaurants(data?.restaurants)
			})
			.catch((error) => {
				console.log(error)
			})

	}, [])

	console.log('restaurants: ', restaurants)
	
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

					{restaurants?.map((restaurant:any) => (
						<RestaurantCard 
							key = {restaurant._id}
							id = {restaurant._id}
							imgUrl = {restaurant.image}
							title = {restaurant.name}
							rating = {restaurant.rating}
							genre = {restaurant.type?.name}
							address = {restaurant.address}
							short_description = {restaurant.short_description}
							dishes = {restaurant.dishes}
							long = {restaurant.long}
							lat = {restaurant.lat}
						/>
					))}
			</ScrollView>
		</View>
	)
}

export default FeaturedRow
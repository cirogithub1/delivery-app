import { useEffect, useState } from 'react'

import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Ionicons } from '@expo/vector-icons'

import { Colors } from '../constants/colors'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'

import sanityClient from "../sanity"

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../App'

export type NavigationProps = NativeStackNavigationProp<
	RootStackParamList, 
	"Home">

// import { UserIcon, ChevronDownIcon,   } from "react-native-heroicons/outline"

const HomeScreen = () => {
	const navigation = useNavigation<NavigationProps>()
	const [featuredCategories, setFeaturedCategories] = useState([])
	
	// useLayoutEffect(() => {
	// 	navigation.setOptions({
	// 		headerShown: false
	// 	})
	// }, [])

	useEffect(() => {
		async function fetchFeatured() {
			await sanityClient
				.fetch(`
					*[_type == "featured"] {
						...,
						restaurants[]->{
							...,
							dishes[]->
						}
					}
				`)
				.then((data:any) => {
					setFeaturedCategories(data)
				})
				.catch((error) => {
					console.log(error)
				})
		}

		fetchFeatured()
	}, [])
	
	// console.log('featuredCategories: ', featuredCategories)

	return (
		<SafeAreaView className='bg-gray-100'>
		
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
				{featuredCategories?.map((category:any) => (
					<FeaturedRow 
						key={category._id}
						id={category._id}
						title={category.name}
						description={category.short_description}
					/>
				))}
			</ScrollView>
		</SafeAreaView>
	)
}

export default HomeScreen
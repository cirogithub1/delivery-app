import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

import sanityClient, { urlFor } from '../sanity'
import CategoryCard from './CategoryCard'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Categories = () => {
	const [categories, setCategories] = useState([])

	useEffect(() => {
		sanityClient.fetch(`
			*[_type == "category"]
		`)
		.then((data:any) => {
			setCategories(data)
		})
		.catch(err => {
			console.log(err)
		})
	}
	, [])
	
	// console.log(categories)

	return (
		<ScrollView
			className=''
			contentContainerStyle={{
				paddingHorizontal: 15,
				paddingTop: 10,
			}}
			horizontal
			showsHorizontalScrollIndicator={false}
		>
			{categories?.map((category:any) => (
				<CategoryCard 
					key={category._id}
					imgUrl = {urlFor(category.image).url()} 
					title={category.name}/>
			))}
		</ScrollView>
	)
}

export default Categories
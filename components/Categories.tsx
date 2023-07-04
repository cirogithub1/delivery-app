import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
	
	return (
		<ScrollView
			contentContainerStyle={{
				paddingHorizontal: 15,
				paddingTop: 10,
			}}
			horizontal
			showsHorizontalScrollIndicator={false}
		>
			<CategoryCard imgUrl = "https://www.themealdb.com/images/media/meals/bopa2i1683209167.jpg" title="testing 1"/>
			<CategoryCard imgUrl = "https://www.themealdb.com/images/media/meals/bopa2i1683209167.jpg" title="testing 2"/>
			<CategoryCard imgUrl = "https://www.themealdb.com/images/media/meals/bopa2i1683209167.jpg" title="testing 3"/>
			<CategoryCard imgUrl = "https://www.themealdb.com/images/media/meals/bopa2i1683209167.jpg" title="testing 4"/>
			<CategoryCard imgUrl = "https://www.themealdb.com/images/media/meals/bopa2i1683209167.jpg" title="testing 5"/>
			<CategoryCard imgUrl = "https://www.themealdb.com/images/media/meals/bopa2i1683209167.jpg" title="testing 6"/>
		</ScrollView>
	)
}

export default Categories
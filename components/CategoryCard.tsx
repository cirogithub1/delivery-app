import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

interface Props {
	imgUrl: string
	title: string
}

const CategoryCard = ({ imgUrl, title }: Props) => {
	return (
		<TouchableOpacity>
			<Image 
				className='h-20 w-20'
				source={{
					uri: imgUrl
				}} />

			<Text className='absolute bottom-1 left-1 text-white font-bold'>{title}</Text>
		</TouchableOpacity>
	)
}

export default CategoryCard
import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { urlFor } from '../sanity'

interface Props {
	imgUrl: string
	title: string
}

const CategoryCard = ({ imgUrl, title }: Props) => {
	return (
		<TouchableOpacity className='mr-1'>
			<Image 
				className='h-20 w-20 rounded-sm'
				source={{
					uri: imgUrl
				}} />

			<Text className='absolute bottom-1 left-1 text-white font-bold'>{title}</Text>
		</TouchableOpacity>
	)
}

export default CategoryCard
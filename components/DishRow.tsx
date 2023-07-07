import { useState } from 'react'
import { View, Text , TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { urlFor } from '../sanity'
import { Colors } from '../constants/colors'

interface Props {
	id: string
	name: string
	description: string 
	price: number
	image: string
}

const DishRow = ({ id, name, description, price, image }: Props) => {
	const [isPressed, setIsPressed] = useState(false)

	function currencyFormat(num:number) {
		return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '€1,')
	}

	return (
		<>
			<TouchableOpacity 
				className='bg-white px-2'
				onPress={() => setIsPressed(!isPressed)}>
				<View className='flex-row'>
					<View className='flex-1 pr-1'>
						<Text className='text-base Xmb-1'>{name}</Text>
						<Text className='text-gray-400'>{description}</Text>
						<Text className='text-gray-400 mt-1'>{currencyFormat(price)}</Text>
					</View>

					<View className='justify-center items-center'>
						<Image 
							className='h-20 w-20 rounded-t-sm'
							source={{
								uri: urlFor(image).url()
							}}
							// style={{
							// 	borderWidth: 1}} 
						/>
					</View>
				</View>
			</TouchableOpacity>

			{isPressed && (
				<View>
					<View className='bg-white items-center justify-center flex-row pb-3 space-x-3'>
						<TouchableOpacity>
							<Ionicons name="remove-circle" size={34} color={Colors.cyan_300}/>
						</TouchableOpacity>
						
						<Text>
							0
						</Text>

						<TouchableOpacity>
							<Ionicons name="add-circle" size={34} color={Colors.cyan_300}/>
						</TouchableOpacity>
					</View>
				</View>
			)}
		</>
	)
}

export default DishRow
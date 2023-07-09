import { useState } from 'react'
import { View, Text , TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { urlFor } from '../sanity'
import { Colors } from '../constants/colors'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { addToBasket, ripFromBasket, selectBasketItemById, selectBasketItems } from '../features/basketSlice'
import { currencyFormat } from '../utils/currency-format'

interface Props {
	id: string
	name: string
	description: string 
	price: number
	image: string
}

const DishRow = ({ id, name, description, price, image }: Props) => {
	const [isPressed, setIsPressed] = useState(false)

	const dispatch = useDispatch()
	const items = useSelector((state:any) => selectBasketItemById(state, id), shallowEqual)
	// here state is the actual dish

	const addItem = () => {
		dispatch(addToBasket({ id, name, description, price, image }))
	}

	const removeItem = () => {
		if (items.length > 0) {
			dispatch(ripFromBasket({ id }))
		} 
	}

	// console.log("items", items)

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
						<TouchableOpacity 
							disabled={items.length === 0}
							onPress={removeItem}>
							<Ionicons name="remove-circle" size={38} color={`${items.length > 0 ? Colors.cyan_300 : Colors.gray_400}`}/>
						</TouchableOpacity>
						
						<Text className='text-base'>
							{items.length}
						</Text>

						<TouchableOpacity 
							onPress={addItem}
						>
							<Ionicons name="add-circle" size={38} color={Colors.cyan_300}/>
						</TouchableOpacity>
					</View>
				</View>
			)}
		</>
	)
}

export default DishRow
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

import { currencyFormat } from '../utils/currency-format'

export type NavigationProps = NativeStackNavigationProp<
	RootStackParamList, 
	"Restaurant" ///this is the name of the screen where i'm gonna return
> 

const BasketBanner = () => {
	const items = useSelector(selectBasketItems)
	const navigation = useNavigation<NavigationProps>()
	const basketTotal = useSelector(selectBasketTotal)

	return (
		<View className='absolute bottom-8 w-full z-10 px-2'>
			<TouchableOpacity
				className='bg-cyan-600 opacity-90 px-4 py-3 rounded-lg flex-row items-center justify-center space-x-1'
				onPress={() => navigation.navigate('Basket')}
			>
				<Text className='text-white border border-white font-extrabold text-base bg-pink-300 Xbg-cyan-900 py-0 px-2 rounded-sm'>{items.length}</Text>	
				
				<Text className='flex-1 text-center text-lime-200 font-extrabold'>Go to Basket</Text>	
				
				<Text className='text-white text-base font-extrabold'>{currencyFormat(basketTotal)}</Text>	
			</TouchableOpacity>
		</View>
	)
}

export default BasketBanner
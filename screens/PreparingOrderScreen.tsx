import { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

export type NavigationProps = NativeStackNavigationProp<
	RootStackParamList, 
	"Home">

const PreparingOrderScreen = () => {
	const navigation = useNavigation<NavigationProps>()

	useEffect(() => {
		setTimeout(() => {
			navigation.navigate("Delivery")
		}, 2000)
	}, [])
	
	return (
		<SafeAreaView className='bg-[#00ccbb] flex-1 justify-center items-center'>
			<Animatable.Image
				className='h-80 w-80'
				source = {require("../assets/delivery_city.gif")}
				animation = "slideInUp"
				iterationCount = {1}
			/>

			<Animatable.Text 
				className='text-sm my-10 text-white font-bold text-center'
				animation="slideInUp"
				iterationCount={1}
			>
				Wating fro restaurant to accert your order.
			</Animatable.Text>

			<Progress.Circle size={30} indeterminate={true} color='white'/>
		</SafeAreaView>
	)
}

export default PreparingOrderScreen
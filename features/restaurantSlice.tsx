import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type DishProps = {
	name: string
	short_description: string
	price: string
	image: string
}

export interface RestaurantState {
	restaurant: {
		id: string | null,
		imgUrl: string | null,
		title: string | null,
		rating: number | null,
		genre: string | null,
		address: string | null,
		short_description: string | null,
		dishes: DishProps[] | null
	}
}

const initialState: RestaurantState = {
  restaurant: {
		id: null,
		imgUrl: null,
		title: null,
		rating: null,
		genre: null,
		address: null,
		short_description: null,
		dishes: null
	}
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
		setRestaurant: (state, action: PayloadAction<any>) => {
			state.restaurant = action.payload
		}
	},
})

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions

export const selectRestaurant = (state:any) => state.restaurant.restaurant

export default restaurantSlice.reducer
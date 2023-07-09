import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface BasketState {
  items: any[]
}

const initialState: BasketState = {
  items:[],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<any>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items = [...state.items, action.payload]
    },
    ripFromBasket: (state, action: PayloadAction<any>) => {
      const index = state.items.findIndex((item:any) => item.id === action.payload.id)
      let newBasket = [...state.items]

      if (index >= 0) {
        newBasket.splice(index, 1)
      } 
       
      state.items = newBasket      
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, ripFromBasket } = basketSlice.actions

export const selectBasketItems = (state:any) => state.basket.items

export const selectBasketItemById = (state:any, id:any) => state.basket.items.filter((item:any) => item.id === id)

export const selectBasketTotal = (state:any) => state.basket.items.reduce((total:number, item:any) => total + item.price, 0)

export default basketSlice.reducer
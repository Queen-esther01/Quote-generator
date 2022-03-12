import { configureStore } from '@reduxjs/toolkit'
import quoteSlice from './quoteSlice'

const store = configureStore({
    reducer: {
        quotesStore: quoteSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export const selectQuotes = (state: RootState) => state.quotesStore

export default store
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { baseUrl } from "../util/baseUrl";
import axios from 'axios'


interface Quote {
    quote: string;
    author?: string;
    loading?: boolean;
}

interface QuotesState {
    quotes: Quote;
}

const initialState: QuotesState = {
    quotes: {
        quote: "",
        author: '',
        loading: false
    }
};

interface PayloadData {
    [key: string]: string
}

const quoteSlice = createSlice({
    name: "quote",
    initialState,
    reducers: {
        fetchQuoteStarted: (state) =>{
            state.quotes.loading = true;
        },
        fetchQuotesSuceeded: (state, action: PayloadAction<PayloadData>) => {
            state.quotes = Object.assign({}, state.quotes, { quote:action.payload.content, author:action.payload.author });
            state.quotes.loading = false
        },
        fetchQuotesFailed: (state, action: PayloadAction<string>) => {
            state.quotes.quote = 'Failed to fetch string';
            state.quotes.loading = false
        }
    }
})




export const getQuote = () =>{
    return async(dispatch: any) =>{
        dispatch({
            type: fetchQuoteStarted.type
        })
        try {
            const requestOptions = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const response = await axios.get(`${baseUrl}/random`, requestOptions)
            console.log(response);
    
            dispatch({
                type: fetchQuotesSuceeded.type,
                payload: response.data
            })
        } 
        catch (error : any) {
            console.log(error.response) 
            dispatch({
                type: fetchQuotesFailed.type,
                payload: error.response.data
            })
        }
    }
    
}

export const { fetchQuoteStarted, fetchQuotesSuceeded, fetchQuotesFailed } = quoteSlice.actions;

export default quoteSlice;
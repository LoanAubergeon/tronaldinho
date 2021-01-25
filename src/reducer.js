import {GET_RANDOM_QUOTE,
    GET_RANDOM_QUOTE_SUCCESS,
    GET_RANDOM_QUOTE_ERROR} from './action'

export const initialState = {
    pending: false,
    quote: "",
    error: null
}

export function quoteReducer(state = initialState, action) {
    console.log("REDUCER: ", action);
    switch(action.type) {
        case GET_RANDOM_QUOTE: 
            return {
                ...state,
                pending: true
            }
        case GET_RANDOM_QUOTE_SUCCESS:
            return {
                ...state,
                pending: false,
                quote: action.quote
            }
        case GET_RANDOM_QUOTE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getRandomQuote = state => state.quote;
export const getRandomQuotePending = state => state.pending;
export const getRandomQuoteError = state => state.error;
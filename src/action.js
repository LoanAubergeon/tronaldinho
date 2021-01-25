export const GET_RANDOM_QUOTE = 'GET_RANDOM_QUOTE';
export const GET_RANDOM_QUOTE_SUCCESS = 'GET_RANDOM_QUOTE_SUCCESS';
export const GET_RANDOM_QUOTE_ERROR = 'GET_RANDOM_QUOTE_ERROR';

export function getRandomQuote() {
    return {
        type: GET_RANDOM_QUOTE
    }
}

export function getRandomQuoteSuccess(quote) {
    return {
        type: GET_RANDOM_QUOTE_SUCCESS,
        quote: quote
    }
}

export function getRandomQuoteError(error) {
    return {
        type: GET_RANDOM_QUOTE_ERROR,
        error: error
    }
}
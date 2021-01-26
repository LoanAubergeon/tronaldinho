import {getRandomQuote, 
getRandomQuoteSuccess,
getRandomQuoteError} from './action'

function fetchQuote() {
    return dispatch => {
        dispatch(getRandomQuote());
        fetch('https://tronalddump.io/random/quote')
        .then(res => res.json())    
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(getRandomQuoteSuccess(res.value, res.appeared_at));
            return res.value;
        })
        .catch(error => {
            dispatch(getRandomQuoteError(error));
        })
    }
}

export default fetchQuote;
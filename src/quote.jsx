import React, { Component } from 'react';
import fetchQuoteAction from './fetchQuote';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRandomQuoteError, getRandomQuote, getRandomQuotePending, getQuoteDate } from './reducer'
import trumpImage from "./img/trump.png"
import SyncLoader from "react-spinners/SyncLoader"
import moment from 'moment'

class Quote extends Component {
    componentWillMount() {
        const {fetchQuote} = this.props;
        fetchQuote();
    }

    shouldComponentRender() {
        const {pending} = this.props;
        if(pending === false) return false;
        return true;
    }
  
    render() {
        const {quote, pending, date} = this.props;
    return (
        
        <div className="box" style={{paddingBottom: "0px"}} onClick={() => this.props.fetchQuote()}>
            <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}> 
                <SyncLoader loading={pending}></SyncLoader>
            </div>
            <p style={{fontStyle: "italic", fontSize: "18px"}}>
                {!pending && (quote ? "\""+quote+"\"" : "nop")} 
            </p>
            <h5 
                style={{position: "absolute", bottom:"5px", right:"10px", margin:"0", padding:"5px 3px", fontWeight: "bold", fontSize: "12px"}}>
                {!pending && (date ? moment(date).format('MM/DD/YYYY') : "--/--/----")} 
            </h5>
            <figure class="image is-128x128" >
                <img style={{paddingTop: "32px"}} alt="trumpface" src={trumpImage} /> 
            </figure>
        </div>
    )
  }
}

const mapStateToProps = state => ({
    error: getRandomQuoteError(state),
    quote: getRandomQuote(state),
    pending: getRandomQuotePending(state),
    date: getQuoteDate(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchQuote: fetchQuoteAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Quote);


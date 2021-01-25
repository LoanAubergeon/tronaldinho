import React, { Component } from 'react';
import fetchQuoteAction from './fetchQuote';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRandomQuoteError, getRandomQuote, getRandomQuotePending } from './reducer'
import trumpImage from "./img/trump.png"
import SyncLoader from "react-spinners/SyncLoader"

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
        const {quote, pending} = this.props;
    return (
        <div className="box" style={{paddingBottom: "0px"}} onClick={() => this.props.fetchQuote()}>
            <SyncLoader loading={pending}></SyncLoader>
            <p >
                {!pending && (quote ? "\""+quote+"\"" : "nop")} 
            </p>
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
    pending: getRandomQuotePending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchQuote: fetchQuoteAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Quote);

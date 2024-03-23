import React from 'react';
import {Component} from 'react';
import './index.css'

class Welcome extends Component{
    state={isSubscribed:false}

    onCickSubscribe = () => {
        this.setState(prevState =>({isSubscribed: !prevState.isSubscribed}))
    }
    getButtonText = () => {
        const {isSubscribed} = this.state
        return isSubscribed ? 'Subscribed' : 'Subscribe'
    }
    render(){
        const buttonText = this.getButtonText();
        return(
            <div className="bg-container">
                <h1 className="heading">Welcome</h1>
                <p className="para">Thank you! Happy Learning</p>
                <button className="subscribe-button"  type="button" onClick={this.onCickSubscribe}>{buttonText}</button>
            </div>
        )

    }
}
export default Welcome;
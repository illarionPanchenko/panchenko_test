import React from 'react';
import "./Medal.css";


export default class Medal extends React.Component{
    render() {
        let medal;
        if(this.props.data.pageviews > 990000){
             medal = 'gold'
        }else if(this.props.data.pageviews > 980000){
            medal = 'second'
        }else if(this.props.data.pageviews > 970000){
            medal = 'third'
        }else{
            medal = 'poly'
        }
        return(
            <div className={medal} >
            </div>
        )
    }
}
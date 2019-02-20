import React from 'react';
import "./Medal.css";
import data from "./data";


export default class Medal extends React.Component{



    render() {
        const array1 = (data.map((item)=>{
            return item.pageviews;
        }));
        let array2 = array1.filter(number => number < Math.max.apply(null, array1));
        let array3 = array2.filter(number => number < Math.max.apply(null, array2));

        let medal;
        if(this.props.data.pageviews === Math.max.apply(null, array1)){
             medal = 'gold';
        }else if(this.props.data.pageviews  === Math.max.apply(null, array2)){
            medal = 'second'
        }else if(this.props.data.pageviews  === Math.max.apply(null, array3)){
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
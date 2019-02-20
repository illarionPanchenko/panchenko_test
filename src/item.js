import React from 'react';
import './item.css';
import Medal from './medal.js';


export default  class Item extends React.Component {

    render() {
        const letter = (item)=>{
            const x = item.split('');
            return x[0];
        };

   const randomColor=()=>{
         const letters = '0123456789ABCDEF';
         let color ='#';
         for (let i = 0; i < 6; i++){
             color += letters[Math.floor(Math.random() * 16)];
         }
         return color;
     };

        const ava=()=>{
          return {backgroundColor: randomColor()}
        };

        return (
            <div className="d-flex itemBox">
                <div className="avatar" style={ava()}>{letter(this.props.item.name)}</div>
                <div className="nameHolder">
                <h6>{this.props.item.name}</h6>
                <span className='publCount'>{this.props.item.count_pub} публ.</span>
                </div>
                <Medal data={this.props.item}/>
                <div>
                <h6>{this.props.item.pageviews}</h6>
                </div>
                </div>
        )
    }
}
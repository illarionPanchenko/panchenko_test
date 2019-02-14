import React from 'react';
import './item.css';
import Medal from './medal.js';


export default  class Item extends React.Component {

    render() {
        const letter = (item)=>{
            const x = item.split('');
            return x[0];
        };

        return (
            <div className="d-flex itemBox">
                <div className="avatar">{letter(this.props.item.name)}</div>
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
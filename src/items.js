import React from 'react';
import Item from './item.js';
import './items.css'

const Items =({data})=>{

   const elements= data.map((item, id) => {
       const classAdder = (key) =>{
           if(key%2===0){return 'list-group-item'}else {return 'list-group-item grey'}
       };
        return(
            <li key={id} className ={classAdder(id)}>
                <div className="flex">
                    <div className="number">{id+1}</div>
                    <Item item = {item} /></div>
            </li>
        )
    });

    return(
        <ul className='list-group'>
            {elements}
        </ul>
    )
};


export default Items;
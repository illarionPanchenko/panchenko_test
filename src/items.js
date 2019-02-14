import React from 'react';
import Item from './item.js';
import './items.css'

const Items =({data})=>{

   const elements= data.map((item) => {
       const classAdder = (key) =>{
           if(key%2!==0){return 'list-group-item'}else {return 'grey'}
       };
        return(
            <li key={item.id} className ={classAdder(item.id)}>
                {item.id}
                <Item item = {item} />
            </li>
        )
    });
   //console.log(data);
    return(
        <ul className='list-group'>
            {elements}
        </ul>
    )
};


export default Items;
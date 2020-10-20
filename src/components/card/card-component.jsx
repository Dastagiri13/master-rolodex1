import React from 'react';
import '../card/card-style.css';
export const Card = (props) => (
    <div className='card-container'>
        <img alt='master' src='https://robohash.org/1?set=set1' />
         <h1>{props.master.name}</h1>
            <p>{props.master.email}</p>
    </div>
)
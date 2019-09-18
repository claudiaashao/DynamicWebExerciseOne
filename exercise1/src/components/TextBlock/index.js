import React from 'react';

export default function TextBlock ({type, data}){
    if(type==='p'){
        return <p className="text">{data}</p>
    } else if (type==='h2'){
        return <h2 className="text">{data}</h2>
    } else {
        return <p className="text">{data}</p>
    }
}
import React from 'react';
import { useState } from 'react';

const ColorChange = () => {
    const [color,setColor] = useState(false);
    function ChangeColor(){
        setColor(!color);
    }
    return (
        <div style={{backgroundColor:color?"red":"blue",width:"100px",height:"100px"}}>
            <button onClick={ChangeColor}>Change Color</button>

        </div>
    )
}
export default ColorChange;
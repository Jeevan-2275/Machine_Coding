import React, {useState} from 'react';


const Counter = () => {
     const [count, setCount] = useState(0);
     function increament(){
        setCount(count +1);
        if(count >= 100){
            alert("Count is  greater than 10");
            setCount(10);

        }
     }

     function decreament(){
        setCount(count - 1);
        if(count <=0){
            setCount(0);
        alert("Count is  less than 0 is Neagative");
        }
     }
     function reset(){
        setCount(0);

     }


     return (
        <div style={{display: 'flex',flexDirection:'column',alignItems: 'center',gap:'10px',justifyContent:'center'}}> 



<div>    <h1>{count}</h1>



</div>
<div style={{display: 'flex',gap:'10px'}}>
    <button onClick={increament}>Increament</button>
    <button onClick={decreament}>Decreament</button>
    <button onClick={reset}>Reset</button>
</div>
</div>
     )
}
export default Counter;
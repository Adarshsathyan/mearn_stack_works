import React from 'react'
import {useState} from 'react'
function Counter({value}) {
    const [number, setNum] = useState(0)
    function increment(){
             setNum(number+1)
    }

    return (
        
        <div style={{textAlign: 'center',padding:'100px'}}>
            <h1>{number}</h1>
            <h1>{value}</h1>
            <button onClick={increment} >Add++</button>
            <button onClick={()=>setNum(number-1)}>Substract--</button>
            <button onClick={()=>setNum(0)}>Reset</button>
        </div>
    )
}

export default Counter

import { useState } from 'react'

export  function myButton(){
    const [counter, setCounter] = useState(0);
 
    function handleClick(){
        setCounter(counter + 1);
    }
        return(
            <button onClick={handleClick}>
                clicado{counter}vezes;
            </button>
        )
    }


import React, { useState } from "react";

export function Count (props){
    const [count, setCount] = useState(0);

    return (
        <>
        <h1 count={count}></h1>
        
        </>
    )
}
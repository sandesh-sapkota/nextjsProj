"use client"

import useCounterStore from "@/stores/counterStore";
 
export default function Counter(){
    const {count, increment, decrement} = useCounterStore();

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
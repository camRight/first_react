import React, { useState } from 'react';
import Button from "../Button/Button";

const Counter = () => {
    const [counter, setCounter] = useState(0)
    
    // const is not immutable. it cannot be redefined
    // state is immutable. Must use pure function


    // use modifier to overwrite counter
    const setCounter = () => {
        let number = counter;
        number++;
        setCounter(number);

        console.log(counter);
    };
    // let count = {}

    // const addOne = () => {
    //     count++;
    // };

    return (
        <div>
            <h1>{count}</h1>
            <Button onClick={() => setCounter()} text="add 1" color="secondary" />
        </div>
    );
};

export default Counter;

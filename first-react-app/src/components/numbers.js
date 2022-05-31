import React, { useState } from "react";


const Numbers = () => {
    const [numbers, setNumbers] = useState(['one', 'two', 'three']);

    console.log(numbers)
    const addNumber = () => {
        setNumbers([...numbers, 'four'])
    }

    return (
        <div>
            <h1>Numbers</h1>

            { numbers.map( num => {
                return <h4 key={num}>{num}</h4>
            })}
            <button onClick={addNumber}>Button</button>
        </div>
    );
}

export default Numbers;
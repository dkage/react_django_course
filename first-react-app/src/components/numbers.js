import React, { useState, useEffect } from "react";


const Numbers = () => {
    const [numbers, setNumbers] = useState(['one', 'two', 'three']);
    const [letters, setLetters] = useState(['a', 'b', 'c', 'd'])


    const addNumber = () => {
        setNumbers([...numbers, 'four'])
    };


    const addLetter = () => {
        setLetters([...letters, 'e'])
    };

    // This work as OnMount and OnUpdate trigger
    useEffect( () => {
        console.log('our use effect test triggering')
    }, [numbers, letters]);

    return (
        <div>
            <h1>Numbers</h1>

            { numbers.map( num => {
                return <h4 key={num}>{num}</h4>
            })}
            <button onClick={addNumber}>Button</button>

            { letters.map( letter => {
                return <h4 key={letter}>{letter}</h4>
            })}
            <button onClick={addLetter}>Button</button>
        </div>
    );
}

export default Numbers;
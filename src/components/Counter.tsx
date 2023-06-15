import React, {useState} from 'react';
import s from './Counter.module.scss'

export const Counter = () => {

    const [count, setCount] = useState<number>(0)

    const increment = () => {
        setCount(prevState => prevState + 1)
    }

    return (
        <div>
            {count}
            <button onClick={increment}  className = {s.btn}>+</button>
        </div>
    );
};


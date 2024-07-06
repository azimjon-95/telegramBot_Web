import React, { useState } from 'react';
import './style.css';
import { useTelegram } from '../../hooks/useTelegram';

const Main = () => {
    const { onClose, increment, decrement } = useTelegram();
    const [count, setCount] = useState(0);

    return (
        <div className="Main">
            <h1 className="Main-title">Count: {count}</h1>
            <div className="button-container">
                <button className="Main-button" onClick={() => increment(count, setCount)}>Increment</button>
                <button className="Main-button" onClick={() => decrement(count, setCount)}>Decrement</button>
                <button className="Main-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Main;



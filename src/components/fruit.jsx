import React from 'react';
import CounterButton from "./button.jsx";
// import Button from "./button.jsx";

function Fruit({emoji, fruitName, count, setCount}) {
    return (
        <div className={"fruit-card"}>
            <p>{emoji}</p>
            <p>{fruitName}</p>
            <CounterButton symbol={"-"} count={count} setCount={setCount}/>
            <p>{count}</p>
            <CounterButton symbol="+" count={count} setCount={setCount}/>


        </div>
    );
}

export default Fruit;
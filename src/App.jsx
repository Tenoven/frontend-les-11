
import './App.css'
import Fruit from "./components/fruit.jsx";
import {useState} from "react";
import CounterButton from "./components/button.jsx";

function App() {

    const [banaanCount, setBanaanCount] = useState(0)
    const [aardbeiCount, setAardbeiCount] = useState(0)
    const [appleCount, setAppleCount] = useState(0)
    const [kiwiCount, setKiwiCount] = useState(0)



  return (
    <>
        <section className={"fruit_section"}>
            <h1>Fruitmand bezorgservice</h1>
            <Fruit emoji={"🍌"} fruitName={"Banaan"} count={banaanCount} setCount={setBanaanCount}/>
            <Fruit emoji={"🍓"} fruitName={"Aardbei"} count={aardbeiCount} setCount={setAardbeiCount}/>
            <Fruit emoji={"🍏"} fruitName={"Appel"} count={appleCount} setCount={setAppleCount}/>
            <Fruit emoji={"🥝"} fruitName={"Kiwi"} count={kiwiCount} setCount={setKiwiCount}/>
            <button className={"reset_button"} onClick={() => setAardbeiCount(aardbeiCount - aardbeiCount) || setBanaanCount(banaanCount - banaanCount) || setAppleCount(appleCount - appleCount) || setKiwiCount(kiwiCount - kiwiCount)}>Reset</button>
        </section>
        </>
  )
}

export default App

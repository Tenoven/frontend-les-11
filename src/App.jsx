
import './App.css'
import Fruit from "./components/fruit.jsx";
import {useState} from "react";
import CounterButton from "./components/button.jsx";
import Input from "./components/input.jsx";
import {useForm} from "react-hook-form";

function App() {

    const [banaanCount, setBanaanCount] = useState(0)
    const [aardbeiCount, setAardbeiCount] = useState(0)
    const [appleCount, setAppleCount] = useState(0)
    const [kiwiCount, setKiwiCount] = useState(0)

    const [formState, setFormState] = useState({
        firstname: "",
        lastname: "",
        age: "",
        postalCode: "",
        frequentie: "iedere week",
        bezorgMoment: "overdag",
        opmerkingen: "",
        voorwaarden: false,
    })

function handleChange(e){
        const changedFieldName = e.target.name


        setFormState({
            ...formState,
            [changedFieldName]: e.target.value,
        })
}

function handleSubmit(e) {
    e.preventDefault()
    console.log(formState)
    console.log(formState, banaanCount, aardbeiCount, appleCount, kiwiCount)
    }


  return (
    <>
        <form onSubmit={handleSubmit}>
            <section className={"fruit_section"}>
                <h1>Fruitmand bezorgservice</h1>
                <Fruit emoji={"🍌"} fruitName={"Banaan"} count={banaanCount} setCount={setBanaanCount}/>
                <Fruit emoji={"🍓"} fruitName={"Aardbei"} count={aardbeiCount} setCount={setAardbeiCount}/>
                <Fruit emoji={"🍏"} fruitName={"Appel"} count={appleCount} setCount={setAppleCount}/>
                <Fruit emoji={"🥝"} fruitName={"Kiwi"} count={kiwiCount} setCount={setKiwiCount}/>
                <button className={"reset_button"} onClick={() => setAardbeiCount(aardbeiCount - aardbeiCount) || setBanaanCount(banaanCount - banaanCount) || setAppleCount(appleCount - appleCount) || setKiwiCount(kiwiCount - kiwiCount)}>Reset</button>
            </section>
            <section className={"form_section"}>
                <Input onchange={handleChange} titel="Voornaam" id={"voornaam_input"} name={"firstname"} value={formState.firstname}></Input>
                <Input onchange={handleChange} titel="Achternaam" id={"achternaam_input"} name={"lastname"} value={formState.lastname}></Input>
                <Input onchange={handleChange} titel="Leeftijd" id={"leeftijd_input"} name={"age"} value={formState.age} ></Input>
                <Input onchange={handleChange} titel="Postcode" id={"postcode_input"} name={"postalCode"} value={formState.postalCode}></Input>
                <p>Bezorgfrequentie</p>
                <select name="frequentie" value={formState.frequentie} onChange={handleChange}>
                    <option value="iedere week">Iedere week</option>
                    <option value="iedere 2 weken">Iedere 2 weken</option>
                    <option value="iedere maand">Iedere maand</option>
                    <option value="iedere 3 maanden">iedere 3 maanden</option>
                </select>
                <div>
                    <input type="radio" name={"bezorgMoment"} value="overdag" checked= {formState.bezorgMoment === "overdag"} onChange={handleChange} />
                    <label>overdag</label>
                    <input type="radio" name={"bezorgMoment"} value="avond" checked= {formState.bezorgMoment === "avond"} onChange={handleChange}/>
                    <label>'s avonds</label>
                </div>
                <p>Opmerking</p>
                <textarea title="opmerking" name="opmerkingen" cols="30" rows="10" value={formState.opmerkingen} onChange={handleChange}></textarea>
                <div className={"flexcolumn"}>
                    <input type="checkbox" name="voorwaarden" checked={formState.voorwaarden} onChange={handleChange}/>
                    <p>ik ga akkoord met de voorwaarden</p>
                </div>
                <button type="submit">Submit</button>

            </section>
        </form>
        </>
  )
}

export default App

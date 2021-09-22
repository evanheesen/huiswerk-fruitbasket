import React from 'react';
import './App.css';
import Tile from "./Components/Tile";
import FormItem from "./Components/FormItem";
import Button from "./Components/Button";

function App() {

    const [state, setState] = React.useState({
        firstName: "",
        lastName: "",
        age: 0,
        postalCode: "",
        frequency: "wekelijks",
        deliveryTime: "overdag",
        comments: "",
        conditions: false
    });

    function handleState(e) {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name1]: value
    })
        ;
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log("Verstuurd!");
        console.log(state.name1);
    }

    return (
        <>
            <img src="https://github.com/hogeschoolnovi/frontend-react-fruitbasket-order-form/raw/master/src/assets/screenshot-logo.png" alt="logo" width="450px"/>
            <h1>Fruitmand bezorgservice</h1>

            {/*Tile componenten*/}
            <Tile
                emoji="🍓"
                title="Aardbeien"
            />
            <Tile
                emoji="🍌"
                title="Bananen"
            />
            <Tile
                emoji="🍏"
                title="Appels"
            />
            <Tile
                emoji="🥝"
                title="Kiwi's"
            />

            {/*Button component*/}
            <Button
                title="Reset"
                typeButton="reset"
            />

            {/* loggen data bij submit */}
            <form
                onSubmit={handleSubmit}
            >
                {/*Form componenten*/}
                <FormItem
                    label="Voornaam"
                    inputType="text"
                    name1="firstName"
                    value={state.firstName}
                    onChange={handleState}
                />
                <FormItem
                    label="Achternaam"
                    inputType="text"
                    name1="lastName"
                    value={state.lastName}
                    onChange={handleState}
                />
                <FormItem
                    label="Leeftijd"
                    inputType="number"
                    name1="age"
                    value={state.age}
                    onChange={handleState}
                />
                <FormItem
                    label="Postcode"
                    inputType="text"
                    name1="postalCode"
                    value={state.postalCode}
                    onChange={handleState}
                />
                <span>Bezorgfrequentie</span>
                <select
                    id="bezorgfrequentie"
                    name1="frequency"
                    onChange={handleState}
                    value={state.frequency}
                >
                    <option value="wekelijks">iedere week</option>
                    <option value="twee-wekelijks">om de week</option>
                    <option value="maandelijks">iedere maand</option>
                </select>
                <FormItem
                    label=""
                    labelName="Overdag"
                    inputType="radio"
                    value="overdag"
                    name1="deliveryTime"
                    checked={state.deliveryTime === "overdag"}
                    onChange={handleState}
                />
                <FormItem
                    label=""
                    labelName="'s Avonds"
                    inputType="radio"
                    value="avond"
                    name1="deliveryTime"
                    checked={state.deliveryTime === "avond"}
                    onChange={handleState}
                />
                <label>Opmerking</label>
                <textarea
                    name="comments"
                    value={state.comments}
                    id="opmerkingen"
                    rows="5"
                    onChange={handleState}
                />
                <FormItem
                    label=""
                    labelName="Ik ga akkoord met de voorwaarden"
                    inputType="checkbox"
                    name1="conditions"
                    checked={state.conditions}
                    onChange={handleState}
                />

                {/*Button component*/}
                <Button
                    title="Verzend"
                    typeButton="submit"
                />
            </form>

        </>
    )
};

export default App;

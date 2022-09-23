import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { getRecipesName } from "../../redux/actions";

export default function Search() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInput(e) {
        e.preventDefault();
        // console.log(e.target.value, 'primero');
        setName(e.target.value);

    }
    function handleSubmit(e) {
        e.preventDefault();

        if (name) {
            dispatch(getRecipesName(name))
            setName('')
        }

    }

    return (

        <React.Fragment>

            <div>

                <input type='text' value={name} onChange={e => handleInput(e)} placeholder="ingrese receta..."></input>

                <button type="submit" onClick={e => handleSubmit(e)}>Buscar</button>

            </div>
            
        </React.Fragment>
    );

}
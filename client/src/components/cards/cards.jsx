import React from "react";
import { Link } from 'react-router-dom';
import Card from "../card/card";

import styles from '../cards/cards.module.css';


export default function Cards({ currentRecipe }) {
    // console.log(currentRecipe,'ES ESTE AKSLDJ');
    return currentRecipe.length > 0 ? (
        <React.Fragment>
            <div className={styles.recipeHome}>
                {
                    currentRecipe.map(rec => (
                        <div key={rec.title}>
                            <Link to={`/detail/${rec.idApi}`} >
                                <Card key={rec.idApi} id={rec.idApi} title={rec.title} image={rec.image} diets={rec.diets}></Card>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </React.Fragment>


    ) : <h1>no recipe para mostrar, apretar F5</h1>


}


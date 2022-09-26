import React from "react";
import styles from '../card/card.module.css';
import imgDefault from '../../img/recipeDefault.jpg'


export default function Card({ title, image, diets, id }) {
    return (

        
        <React.Fragment >

            <div className={styles.card} >

                <div className={styles.imgRecipe}>
                    <img src={image?image: imgDefault} alt="imagen de la comida" />
                </div>

                <div className={styles.cardInfo}>

                    
                        <h3 className={styles.tituloCont}>{title}</h3>
                    

                    <div className={styles.dietasCont}>
                        <h5 >Tipo de dieta: </h5>
                        {
                            diets?.map((d,k) => (
                                <p key={k}>{d}</p>
                            ))
                        }
                    </div>

                </div>
                
            </div>

        </React.Fragment>
    );
}

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { getDetails } from "../../redux/actions";
import style from '../details/details.module.css';


export default function Details() {

    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getDetails(id))
    }, [dispatch])

    const AllRecipes = useSelector(state => state.detailsRecipes)


    console.log(AllRecipes);


    return (
        <React.Fragment>
            <div className={style.mainContainer}>
                <div>

                    <h1 className={style.contitle}>{AllRecipes.title}</h1>

                    <div className={style.detailContainer}>

                        <div className={style.leftContainer}>

                            <img src={AllRecipes.image}></img>

                            <div className={style.detailHealth}>
                                <h1>{AllRecipes.healthScore}</h1>
                            </div>

                        </div>

                        <div className={style.rightContainer}>

                            <h1>summary</h1>

                            <div className={style.summaryDetalles}>
                                <p>{AllRecipes.summary}</p>
                            </div>

                            <h1>steps</h1>

                            <div className={style.stepsDetalles}>
                                <p>{AllRecipes.steps}</p>
                            </div>

                        </div>

                    </div>

                </div>

                <div>
                    <Link to='/home'>
                        <button>Back to Home</button>
                    </Link>
                </div>

            </div>
        </React.Fragment>
    );
}
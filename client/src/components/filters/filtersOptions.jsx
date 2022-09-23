import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterByDiets, filterByHealthScore, filterByOrden, getDiets, setPagina } from "../../redux/actions";

// import styles from '../filters/filtersOptions.module.css';

export default function FiltersOptions({ setOrden,dietas ,setCurrentPage}) {

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getDiets())
    }, [dispatch])

    

    // console.log(dietas);

    function handleFilterDiets(e) {
        e.preventDefault()
        dispatch(filterByDiets(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    }

    function handleFilterOrder(e) {
        e.preventDefault()
        dispatch(filterByOrden(e.target.value))

        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    }

    function handleFilterHealthScore(e){
        e.preventDefault()
        dispatch(filterByHealthScore(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)

    }


    return (


        <div>

            {/* <div> */}
            <span>filter by diets: </span>
                <select onChange={e => handleFilterDiets(e)} defaultValue='filter by diets' >
                    <option disabled={false}>filter by diets</option>
                    {
                        dietas?.map(type => (
                            <option key={type.name} value={type.name.toLowerCase()}>{type.name}</option>
                        ))
                    }
                </select>
            {/* </div> */}



            {/* <div> */}
                    
                <span>filter by order: </span>
                <select defaultValue='filter by order' onChange={e => handleFilterOrder(e)}>
                    <option disabled>filter by order</option>
                    <option key='ascendente' value='ascendente'>A-Z</option>
                    <option key='descendente' value='descendente'>Z-A</option>
                </select>
            {/* </div> */}


            {/* <div> */}
            <span>filter by score: </span>
                <select defaultValue='filter by score' onChange={e=>handleFilterHealthScore(e)}>
                    <option disabled>filter by score</option>
                    {/* <option value='healthScore'>HealthScore</option> */}
                    <option value='Mam'>Mayor a Menor</option>
                    <option value='maM'>Menor a Mayor</option>

                </select>
            {/* </div> */}

        </div>

    );
}
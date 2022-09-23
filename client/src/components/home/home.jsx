import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import Search from '../../components/search/search';
import { getRecipes, setPagina } from "../../redux/actions";
import Cards from "../cards/cards";
import Pagination from "../pagination/pagination";
import FiltersOptions from "../filters/filtersOptions";

import style from '../home/home.module.css';
import { Link } from "react-router-dom";

export default function Home() {

    const dispatch = useDispatch();

    const recetas = useSelector((state) => state.recipes);
    const dietas = useSelector(state => state.typesDiets);
    const [orden, setOrden] = useState('');


    // console.log(recetas);

    // const currentPage = useSelector(state => state.currentPage);
    // const [recipesPerPage] = useState(10);


    // const indexOfLastRecipe = currentPage === 1 ? 9 : currentPage * recipesPerPage - 1;
    // const indexOfFirstRecipe = currentPage === 1 ? 0 : indexOfLastRecipe - recipesPerPage;

    // const currentRecipe = recetas.slice(indexOfFirstRecipe, indexOfLastRecipe);
    // console.log(currentRecipe);

    const [currentPage, setCurrentPage] = useState(1)
    const recipesPerPage = 9;
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipe = recetas.length? recetas.slice(indexOfFirstRecipe, indexOfLastRecipe):[];

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
        // dispatch(setPagina(pageNumber))
    }

    useEffect(() => {
        dispatch(getRecipes())
    }, [dispatch])

    function handleClick(e) {
        e.preventDefault()
        dispatch(getRecipes())
    }


    return (
        <React.Fragment>
            <button onClick={e => { handleClick(e) }}>Volver a cargar recetas</button>

            <div className={style.filterSort}>
                {/* <div> */}
                <FiltersOptions setCurrentPage={setCurrentPage} setOrden={setOrden} dietas={dietas}></FiltersOptions>
                <Search></Search>
                <Link to='/create'>
                    <button>Create a new Recipe</button>
                </Link>
                {/* </div> */}
            </div>

            <div>
                <Pagination recetas={recetas.length} recipesPerPage={recipesPerPage} paginado={paginado}></Pagination>
            </div>

            <div>
                <Cards currentRecipe={currentRecipe}></Cards>
            </div>


        </React.Fragment>
    );
}
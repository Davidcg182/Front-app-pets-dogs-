import React from "react";
import {getDogs} from '../Actions/Actions.js'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DogByName from "./DogByName.jsx";
import Filters from './Filters'
import Orders from './Orders'
import Pagination from "./Pagination.jsx";
import style from './Dogs.module.css';
import { useState } from "react";

export default function GetDogs () {

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDogs())
    },[])

    let allDogs = useSelector(state => state.dogs)
    let change = useSelector(state => state.change)
   // console.log(allDogs)
 
    let [page, setPage] = useState(1)
    let pages = page*8
    let dogsxPage = allDogs.slice(pages-8, pages)

    let lastPage = Math.ceil(allDogs.length/8)
    //console.log(lastPage)

    function handleOnPagination (actualPage) {
        setPage(actualPage)
    }

    function prevPag () {
        if (page !== 1) setPage(page - 1)
    }

    function nextPag () {
        if (page !== lastPage) setPage(page +1)
        // console.log(page)
        // console.log(lastPage)
    }

    if(dogsxPage.length>0){
        return (
            <div className={style.global} >
    
                <div>
                    <h1>App dogs</h1>
                </div>
    
                <div className={style.flexOrder}>
                    <div>
                        <DogByName
                            setPage = {setPage}
                        />
                    </div>
                    <div>    
                        <Filters
                            setPage = {setPage}
                        />
                    </div>
                    <div >
                        <Orders/>
                    </div>
                </div>
    
                <div>
                    <Link to='/createdog'>
                        <button className={style.btn}>Create your dog</button>
                    </Link>
                </div>
    
                <div>
                    <br/>
                        <Pagination
                            prevPag={prevPag}
                            actualPage = {handleOnPagination}
                            nextPag = {nextPag}
                        />
                    <br/>
                </div>
                    <div className={style.flex} >
                            {dogsxPage?.map(e => {
                                if (e.temperaments) {
                                let temp = e.temperaments.map( e => (`${e.name} `))
                                return(
                                <div className={style.card} key={e.id}>
                                    <h1>{e.name}</h1>
                                    <Link to={`/dogs/${e.id}`} >
                                        <img src={e.image} alt='imagen' />
                                    </Link>
                                    <div>
                                        <p>Weight: {e.weight}</p>
                                    </div>
                                    <div className={style.temp}>
                                        <p>Temperaments: {temp}</p>
                                    </div>
                                </div>)
                                }
                                else return(
                                    <div className={style.card} key={e.id}>
                                        <h1>{e.name}</h1>
                                        <Link to={`/dogs/${e.id}`} >
                                            <img src={e.image} alt='image' />
                                        </Link>
                                        <p>Weight: {e.weight}</p>
                                        <div className={style.temp}>
                                            <p>Temperament: {'Undefined temperaments'}</p>
                                        </div>
                                    </div>)              
                        })}
                  </div>
                  <br/>
                    <div>
                        <Pagination
                            prevPag={prevPag}
                            actualPage = {handleOnPagination}
                            nextPag = {nextPag}
                        />
                    </div>
                    <br/>
            
            </div>
        )
    } else {
        return (
            <img src="https://2.bp.blogspot.com/-XiSjtt3EJww/Uuwc4M8wqRI/AAAAAAAA0Kg/itJSN2H9oUw/s1600/perro+pelota.gif" alt="loading..." />
        )
    }

    
}
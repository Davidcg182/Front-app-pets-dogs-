import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import {detail} from '../Actions/Actions.js'
import { Link } from "react-router-dom"
import style from './Detail.module.css'

export default function Detail () {

    let params = useParams()
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(detail(params.id))
    },[])

    let details = useSelector(state => state.detail)

    if(details.image){
    return (
        <div className={style.margin}>
            <div>
            </div>
            <div className={style.card}>
                <Link to='/dogs'>
                    <button className={style.btn}> Back </button>
                </Link>
                <h1>{details.name}</h1>
                <img src={details.image} alt='imagen' />
                <p>Weight: {details.weight}</p>
                <p>Height: {details.height}</p>
                <p>Origin: {details.origin}</p>
                {!details.life_span && <p>life_span: No defined</p> }
                {details.life_span && <p>Life_span: {details.life_span}</p> }
                <div className={style.temp}>
                <p>Temperament: {details.temperaments?.map(e => `${e.name} `)} </p> 
                </div>
            </div>
        </div> 
    )}
    else return (
        <div>
            <img src="https://2.bp.blogspot.com/-XiSjtt3EJww/Uuwc4M8wqRI/AAAAAAAA0Kg/itJSN2H9oUw/s1600/perro+pelota.gif" alt="loading..." />
        </div>
    )
}
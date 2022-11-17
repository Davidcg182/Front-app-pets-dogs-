import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../Actions/Actions";
import style from './Filters.module.css'


export default function DogByName (props) {


    let dispatch = useDispatch()
    let [name, setName] = useState(' ')

    let handleOnsubmit = function (e) {
        e.preventDefault()
       // console.log(name)
        dispatch(getByName(name))
        props.setPage(1)
    }

    let handleOnChange = function (e) {
        e.preventDefault()
        setName (e.target.value)
     //   console.log(e.target.value)
    }

    return (
        <div>
            <input className={style.input} type='text' placeholder="Breed..." onChange ={e => handleOnChange(e)}/>
            <button className={style.btn} type="submit" onClick={e => handleOnsubmit(e)}> Send </button>
        </div>
    )
}
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTemperaments, filterByTemperament, filterDogs } from "../Actions/Actions"
import style from './Filters.module.css'

export default function GetFilters (props) {

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTemperaments())
    }, [])

    let allTemperaments = useSelector(state => state.temperaments)
    //console.log(allTemperaments)
    let handleOnChange = function (e) {
        e.preventDefault()
        dispatch(filterByTemperament(e.target.value))
        props.setPage(1)
     //   console.log(e.target.value)
    }

    let handleOnChange2 = function (e) {
        e.preventDefault()
        dispatch(filterDogs(e.target.value))
        props.setPage(1)
     //    console.log(e.target.value)
    }

    return (
        <div>
            <div>
                <label className={style.label}>Choose temperament</label>
                <select className={style.select} onChange={e => handleOnChange(e)} name='temperaments'>
                    {allTemperaments.map(e => {
                        return (
                                <option key={e.id} value={e.name}>{e.name}</option>  
                        )
                    })}
                </select>
            </div>
            <div>
                <label className={style.label}>Choose dogs</label>
                <select className={style.select} onChange={e => handleOnChange2(e)}>
                    <option value={'All dogs'}> All dogs</option>
                    <option value={'Api dogs'}> Api dogs</option>
                    <option value={'Db dogs'}> Db dogs</option>
                </select>
            </div>
        </div>
    )
}
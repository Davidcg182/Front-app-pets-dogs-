import React from "react"
import { connect } from "react-redux"
import {filterAlfa, filterWeight} from '../Actions/Actions.js'
import style from './Filters.module.css'

export function OrderDogs (props) {

    let handleOnChange = function (e) {
        e.preventDefault()
        props.filterAlpha(e.target.value)
    }

    let handleOnChange2 = function (e) {
        e.preventDefault()
        props.filterWeight(e.target.value)
    }

    return(
        <div>
        <div>
            <label className={style.label} >Alphabetic order </label>
            <select className={style.select} onChange={e => handleOnChange(e)}>
                <option value={'A-Z dogs'}> A-Z dogs </option>
                <option value={'Z-A dogs'}> Z-A dogs</option>
            </select>
        </div>
        <div>
            <label className={style.label} >Wheight order</label>
            <select className={style.select} onChange={e => handleOnChange2(e)}>
                <option value={'+ weight'}> + weight </option>
                <option value={'- weight'}> - weight </option>
            </select>
        </div>
        <div>
    </div>
    </div>
    )


    
}

function mapDispatchToProps(dispatch) {
    return {
        filterAlpha: order => dispatch(filterAlfa(order)),
        filterWeight: filter => dispatch(filterWeight(filter))
    }
}

export default connect (null, mapDispatchToProps) (OrderDogs)
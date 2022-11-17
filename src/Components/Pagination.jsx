import { connect } from "react-redux"
import React from "react"
import { pagination } from "../Actions/Actions"
import style from './Pagination.module.css'


export function Pagination (props) {

    let pagenumber = Math.ceil(props.dogs1.length/8)
    let pages = []

    for (let i = 1; i <= pagenumber; i++) {
        pages.push(i)
    }

    return(
        <div className={style.pagination}>
            <button onClick={props.prevPag}> Prev {'<<'} </button> 
            {pages?.map(e => {
              return  <button value={e} onClick={() => props.actualPage(e)}>{e}</button>
            })}
            <button onClick={props.nextPag} > Next {'>>'} </button>

        </div>
    )
}

function mapStateToProps (state) {
    return {
        dogs1: state.dogs,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        pagination1: (numbpage) => dispatch(pagination(numbpage))
    }
}

export default connect (mapStateToProps,mapDispatchToProps) (Pagination)

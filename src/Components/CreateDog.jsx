import React from "react";
import { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addDog, getTemperaments, getDogs } from "../Actions/Actions";
import style from './CreateDog.module.css'


export  function CreateDog (props) {

    let incialstate = {
        name: '',
        life_span: '',
        weight: '',
        height: '',
        origin: '',
        image: '',
        temperament: []
    }

    let [error, setError] = useState({})
    let [input, setInput] = useState(incialstate)
    let dispatch = useDispatch()
    var allDogs = useSelector(state => state.dogs)

    useEffect(() => {
        dispatch(getDogs())
    },[])

    let handleOnChange = function (e) {
        setInput ({
            ...input,
            [e.target.name]: e.target.value
        })
        setError(validation({
            ...input,
            [e.target.name]: e.target.value
        }))
     //   console.log(input)
    }

    let handleOnSubmit = function(e) {
        e.preventDefault()
        props.getTemperaments1(input)
        props.addDog1(input)
     //   console.log(input)
        setInput(incialstate)
    }

    //let arr1 = temperament

    useEffect(() => {
        props.getTemperaments1()
    },[])


    let handleOnChange1 = function (e) {
        if(!input.temperament.includes(e.target.value)){
        setInput({
            ...input,
            temperament: [...input.temperament, e.target.value]
        })
     //   console.log(input)
        }
    }

    let handleOnClick = function (e) {
        e.preventDefault(e)
        setInput({
            ...input,
            temperament: []
        })
    }

    function validation (input) {
        let error = {}  
        if(!input.name){
            error.name = 'Plese insert a dog name (required)'
        }
        if(allDogs.find(e => e.name === input.name)){
            error.name = 'This dog have already exist'
        }
        if(!input.weight) {
            error.weight = 'Plese insert a dog weight (required)'
        }
        if(input.weight && /^\d{3,99}$/.test(input.weight) || !/^([0-9])*$/.test(input.weight)) {
            error.weight = 'Only number between 0 and 99'
        }
        if(!input.height) {
            error.height = 'Plese insert a dog height (required)'        
        }
        if(input.height && /^\d{3,99}$/.test(input.height) || !/^([0-9])*$/.test(input.height)) {
            error.height = 'Only number between 0 and 99'
        }
        return error
    }

    return(
            <div className={style.form} >
                <form onSubmit={e => handleOnSubmit(e)}>
                    <div className={style.items}>
                        <div>
                            <br/>
                            <label>Name: </label>
                            <input placeholder="breed..." type='text' name='name' value={input.name}
                                onChange={e => handleOnChange(e)}/>
                                {error.name && (
                                    <p>{error.name}</p>
                                )}
  
                        </div>
                        <div className={style.treeinputs}>
                            <label>Life_span:</label>
                            <input className={style.lifeinput} placeholder="years of life..." type='text' name='life_span'
                            value={input.life_span}
                                onChange={e => handleOnChange(e)}/>
                                {error.life_span && (
                                    <p>{error.life_span}</p>
                                )}
                        </div>
                        <div>
                            <label>Image: </label>
                            <input placeholder="picture in url..." type='text' name='image'
                            value={input.image} onChange={
                                e => handleOnChange(e)}/>
                        </div>
                        <div>
                            <label>Weight: </label>
                            <input placeholder="weight range..." type='text' name='weight'
                            value={input.weight} onChange={
                                e => handleOnChange(e)}/>
                                {error.weight && (
                                    <p>{error.weight}</p>
                                )} 
                        </div>
                        <div>
                            <label>Height: </label>
                            <input placeholder="height range..." type='text' name='height'
                            value={input.height} onChange={
                                e => handleOnChange(e)}/>
                                {error.height && (
                                    <p>{error.height}</p>
                                )} 
                        </div>
                        <div>
                            <label>origin: </label>
                            <input placeholder="origin..." type='text' name='origin'
                            value={input.origin} onChange={
                                e => handleOnChange(e)}/>
                        </div>
                        <div>
                            <label>choose temperament: </label>
                            <select className={style.select} onChange={e => handleOnChange1(e)}>
                                {props.temperaments.map(e => {
                                return (
                                    <option value={e.name}>{e.name}</option>  
                                )
                            })}
                            </select>
                        </div>
                        <div>
                            <p>{input.temperament.map( e => {return `${e} `})}</p>
                            <button className={style.btn}
                            onClick={e => handleOnClick(e)}>Clear Temperaments</button>
                        </div>
                        <div>
                            <button className={style.btn} type='submit' value='send'
                            disabled={Object.entries(error).length === 0? false : true} >Send</button>
                        </div>
                        <div>
                            <Link to='/dogs'>
                                <button className={style.btn} >Back to the dog list</button>
                            </Link>
                        </div>
                    </div>    
                </form>
            </div>    
    )
}

function mapStateToProps (state) {
    return {
        temperaments: state.temperaments
    }
}

function mapDispatchToProps (dispatch) {
    return {
       addDog1 : (e) => dispatch(addDog(e)),
       getTemperaments1 : () =>dispatch(getTemperaments())
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (CreateDog)
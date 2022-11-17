import axios from 'axios'
import { GET_ALL_DOGS, DETAIL, GET_BY_NAME, ALL_TEMPERAMENTS, FILTER_BY_TEMPERAMENT, FILTER_DOGS, FILTER_ALFA,
 FILTER_WEIGHT, ADD_DOGS, PAGINATION} from './ActionTypes'

export function getDogs () {
    try {
        return async function (dispatch) {
            let dogsBack = await axios('/dogs')
            return dispatch ({
                type: GET_ALL_DOGS,
                payload: dogsBack.data
            })
        }
    } catch (error) {
        throw new Error ({Error: error.message})
    }
}

export function detail (id) {
    try {
        return async function (dispatch) {
            let dogsdetail = await axios(`/dogs/${id}`)
            return dispatch ({
                type: DETAIL,
                payload: dogsdetail.data
            })
        }
    } catch (error) {
        throw new Error ({Error: error.message})
    }
   
}

export function getByName (name) {
    try {
        return async function (dispatch) {
            let dogbyname = await axios(`/dogs?name=${name}`)
            return dispatch ({
                type: GET_BY_NAME,
                payload: dogbyname.data
            })
        }
    } catch (error) {
        throw new Error ('Verificar nombre y datos')
    }
}

export function getTemperaments () {
    try {
        return async function (dispatch) {
            let alltemperaments = await axios(`/temperaments`)
            return dispatch ({
                type: ALL_TEMPERAMENTS,
                payload: alltemperaments.data
            })
        }
    } catch (error) {
        throw new Error ({Error: error.message})
    }
}

export function filterByTemperament (temperament) {
    return ( {
        type: FILTER_BY_TEMPERAMENT,
        payload: temperament
    })
}

export function filterDogs (origindogs) {
    return ({
        type: FILTER_DOGS,
        payload: origindogs
    }) 
}

export function filterAlfa (order) {
    return ({
        type: FILTER_ALFA,
        payload: order
    })
}

export function filterWeight (filter) {
    return ({
        type: FILTER_WEIGHT,
        payload: filter
    })
}

export function addDog (reqboby) {
    try {
        return async function (dispatch) {
            let adddog = await axios.post('/dogs',
            reqboby)
            return dispatch ({
                type: ADD_DOGS,
                payload: adddog.data
            })
        }
    } catch (error) {
        throw new Error ({error: error.message})
    }
}

export function pagination (numbpage) {
    return {
        type: PAGINATION,
        payload: numbpage
    }
}

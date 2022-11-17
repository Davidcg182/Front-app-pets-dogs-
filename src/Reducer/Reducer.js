import { GET_ALL_DOGS, DETAIL, GET_BY_NAME, ALL_TEMPERAMENTS, FILTER_BY_TEMPERAMENT, FILTER_DOGS, FILTER_ALFA,
FILTER_WEIGHT, ADD_DOGS, PAGINATION} from "../Actions/ActionTypes"

const inicialState = {
    dogsdb: [],
    dogs : [],
    copiedogs:[],
    detail: {},
    temperaments: [],
    change: false,
}

export default function rootReducer (state = inicialState, action) {
    switch (action.type) {
        case GET_ALL_DOGS : return {
            ...state,
            dogs: action.payload,
            copiedogs:action.payload
        }

        case DETAIL: return {
            ...state,
            detail: action.payload
        }

        case GET_BY_NAME: return {
            ...state,
            dogs: action.payload
        }

        case ALL_TEMPERAMENTS: return {
            ...state,
            temperaments: action.payload
        }
        
        case FILTER_BY_TEMPERAMENT: 
       {let temp = []
        state.copiedogs.forEach(e => {
            if (e.temperaments) {
                e.temperaments.forEach(el =>{ 
                    if(el.name === action.payload){
                        temp.push(e)
                    }
                    })
            }
        })
        return {
            ...state,
            dogs: temp
        }}
        
        case FILTER_DOGS: {
            if (action.payload === 'Api dogs') {
                let arr = state.copiedogs.filter(e => typeof e.id === "number")
                        return {
                            ...state,
                            dogs: arr
                        }
                    }
            
            if (action.payload === 'Db dogs') {
                let arr = state.copiedogs.filter(e => typeof e.id === "string")
                        return {
                            ...state,
                            dogs: arr
                        }
                    }
            else return {
                ...state,
                dogs: state.copiedogs
        }}

        case FILTER_ALFA: {
            if(action.payload === 'A-Z dogs'){
                let arr = state.copiedogs.sort(function(a,b) {
                    if(a.name < b.name) {
                      return -1
                    }
                    if(a.name > b.name) {
                      return 1
                    }
                    else return 0
                  })
                return {
                    ...state,
                    dogs: arr,
                    change: state.change? false : true
                }
            }

            else if(action.payload === 'Z-A dogs'){
                let arr = state.copiedogs.sort(function(a,b) {
                    if(a.name < b.name) {
                      return -1
                    }
                    if(a.name > b.name) {
                      return 1
                    }
                    else return 0
                  })
                let arr2 = arr.reverse()
                return {
                    ...state,
                    dogs: arr2,
                    change: state.change? false : true
                }
            }
            
        }


        case FILTER_WEIGHT: {
            if(action.payload === '- weight'){
                let arr = state.copiedogs.sort(function(a,b) {
                    if(parseInt(a.weight) < parseInt(b.weight)) {
                      return -1
                    }
                    if(parseInt(a.weight) > parseInt(b.weight)) {
                      return 1
                    }
                    else return 0
                  })
                return {
                    ...state,
                    dogs: arr,
                    change: state.change? false : true
                }
            }

            else if(action.payload === '+ weight'){
                let media = []
                state.copiedogs.forEach(e => {
                  e.weight.split('-')
                })
                let arr = state.copiedogs.sort(function(a,b) {
                    if(parseInt(a.weight) < parseInt(b.weight)) {
                      return -1
                    }
                    if(parseInt(a.weight) > parseInt(b.weight)) {
                      return 1
                    }
                    else if (parseInt(a.weight) === parseInt(b.weight)) {
                        state.copiedogs.sort(function(a,b){
                            if(parseInt(a.weight.split('-')[1]) < parseInt(b.weight.split('-')[1])) {
                                return -1
                              }
                            if(parseInt(a.weight.split('-')[1]) > parseInt(b.weight.split('-')[1])) {
                                return 1
                              }
                            else return 0
                        })
                    }
                    return 0
                  })
                let arr2 = arr.reverse()
                return {
                    ...state,
                    dogs: arr2,
                    change: state.change? false : true
                }
            }
        }

        case ADD_DOGS: return {
            ...state,
            dogsdb: [...state.dogsdb,{...action.payload}]
        }

        case PAGINATION:{
            
          let page = action.payload*8  
          let dogs1 = state.copiedogs.slice((page-8), page)

          return {
            ...state,
            dogs: dogs1
          }
        }
          
        default: return {...state}
    }
}

import axios from "axios"

let nextTodoId = 0
let nextTableId = 0

export function fetchBear() {
    return function(dispatch){
        console.log(1)
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response=>{
                console.log(response)
                dispatch({
                    type:'FETCH_BEARS_FULLFILLED',
                    payload: response.data
                })
            })
            .catch(err=>{
                dispatch({
                    type:'FETCH_BEARS_REJECTED',
                    payload: err
                })
            })
    }
}

export const addTable = (col) => {
    console.log(col);
    return {
        type: 'ADD_TABLE',
        id: nextTableId++,
        col
    }
}

export const addEntries = (id,entries) => {
    console.log(entries);
    return {
        type: 'CREATE_TABLE_ENTRIES',
        id: id,
        entries
    }
}
export const addHeader = (id,headers) => {
    console.log(headers);
    return {
        type: 'CREATE_TABLE_HEAD',
        id: id,
        headers
    }
}
export const sort = (id,index) => {
    return {
        type: 'SORT_TABLE',
        id: id,
        index
    }
}
export const paginate = (id,page) => {
    return {
        type: 'PAGINATE_TABLE',
        id: id,
        page
    }
}
export const addMarker = (lat,lng, lock, text) => {
    return {
        type: 'ADD_MARKER',
        lat,
        lng,
        lock,
        text
    }
}
export const setVisibilityFilter = filter => {
    return {type: 'SET_VISIBILITY_FILTER', filter}
}

export const toggleTodo = id => {
    return {type: 'TOGGLE_TODO', id}
}
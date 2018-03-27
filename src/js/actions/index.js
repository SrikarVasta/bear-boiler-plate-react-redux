import axios from "axios"

let nextTodoId = 0
let nextTableId = 0

export function fetchBear() {
    return function (dispatch) {
        console.log(1)
        axios.get("http://localhost:8080/api/bears")
            .then(response => {
                console.log(response)
                dispatch({
                    type: 'FETCH_BEARS_FULLFILLED',
                    payload: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: 'FETCH_BEARS_REJECTED',
                    payload: err
                })
            })
    }
}



export const addBears = (bear) => {
    return function (dispatch) {
        console.log(bear)
        let data = JSON.stringify({
            name : bear.name
        })
        axios.post("http://localhost:8080/api/bears", data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                console.log(response)
                dispatch({
                    type: 'CREATE_BEARS_FULLFILLED',
                    payload: response.data
                })
                dispatch(fetchBear())
            })
            .catch(err => {
                dispatch({
                    type: 'CREATE_BEARS_REJECTED',
                    payload: err
                })
            })
    }
}
export const updateBears = (bear) => {
    return function (dispatch) {
        console.log(bear)
        let data = JSON.stringify({
            name : bear.name,
        })
        axios.put(`http://localhost:8080/api/bears/${bear._id}`, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                console.log(response)
                dispatch({
                    type: 'UPDATE_BEARS_FULLFILLED',
                    payload: response.data
                })
                dispatch(fetchBear())
            })
            .catch(err => {
                dispatch({
                    type: 'UPDATE_BEARS_REJECTED',
                    payload: err
                })
            })
    }
}

export const deleteBears = (bear) => {
    return function (dispatch) {
        console.log(bear)
        axios.delete(`http://localhost:8080/api/bears/${bear._id}`)
            .then(response => {
                console.log(response)
                dispatch({
                    type: 'DELETE_BEARS_FULLFILLED',
                    payload: response.data
                })
                dispatch(fetchBear())
            })
            .catch(err => {
                dispatch({
                    type: 'DELETE_BEARS_REJECTED',
                    payload: err
                })
            })
    }
}
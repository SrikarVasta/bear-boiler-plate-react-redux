const bears = (state = {
    bears: [],
    fetching: false,
    fetched: false,
    error: false
}
    , action) => {
    // console.log(state)

    switch (action.type) {
        case 'FETCH_BEARS_FULLFILLED': {
            console.log(action.payload)
            return {
                ...state, bears: action.payload
            }
        }
        case 'FETCH_BEARS_REJECTED': {
            console.log('err')
            return {
                ...state
            }
        }
        case 'CREATE_BEARS_FULLFILLED': {
            console.log(action.payload)
            return {
                ...state
            }
        }
        default:
            return state
    }
}

export default bears

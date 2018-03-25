const bears = (state = {
    bears:[1],
    fetching: false,
    fetched: false,
    error: false
}
    , action) => {
    // console.log(state)
    
    switch (action.type) {
        case 'FETCH_BEARS_FULLFILLED':{
            console.log(action.payload)
            return {
                ...state, bears: action.payload 
            }
        }
        default:
            return state
    }
}

export default bears

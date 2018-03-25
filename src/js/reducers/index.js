import {combineReducers} from 'redux'
import bears  from './bearReducer'


const bearApp = combineReducers({
    bears,
})

export default bearApp
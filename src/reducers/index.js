import user from './userReducer'
import convert from './convertReducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    user,
    convert,
})

export default rootReducer
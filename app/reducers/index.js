import noteReducer from './reducers.notes.js'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  note: noteReducer
})

export default rootReducer

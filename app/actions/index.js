import { ADD_NOTES,
        EDIT_NOTES } from '../constant/ActionTypes'

export const addNotes = (note) => {
  return {
    type: ADD_NOTES,
    note: note
  }
}//({type:...,payload})

export const editNotes = (id, note) => {
  return {
    type: EDIT_NOTES,
    id: id,
    note: note
  }
}

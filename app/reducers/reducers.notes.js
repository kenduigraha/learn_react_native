import { ADD_NOTES,
        EDIT_NOTES } from '../constant/ActionTypes'

export default notes = (state=[], action) => {
  switch(action.type){
    case ADD_NOTES:
      return [{
        id: action.note.id,
        title: action.note.title,
        content: action.note.content,
        userId: action.note.userId
      },
      ...state]

    case EDIT_NOTES:
        return state.map(data => data.id === action.id ? Object.assign({}, data, {title: action.note.title, content: action.note.content}) : data )

    default:
      return state
  }
}

import reducers from './reducers.notes.js'
import { addNotes, editNotes } from '../actions'

describe('add new note', () => {
  it('should add new note, reducers', () => {
    const note = {
      id: 1,
      title: "test title",
      content: "test content",
      userId: 1
    }

    const expectedAction = {
      type: 'ADD_NOTES',
      note
    }

    // expect(addNotes(note)).toEqual(expectedAction) test action

    expect(reducers(undefined, addNotes(note))).toEqual([note])
  })
})

describe('edit a note', () => {
  it('should edit a note with new data', () => {
    const beforeEdit = {
      id: 1,
      title: "test title before edit",
      content: "test content before edit",
      userId: 1
    }

    const note = {
      id: 1,
      title: "edit title",
      content: "edit content",
      userId: 1
    }

    const id = 1

    const expectedAction = {
      type: 'EDIT_NOTES',
      id,
      note
    }
    // expect(editNotes(id, note)).toEqual(expectedAction)

    expect(reducers([beforeEdit], editNotes(id, note))).toEqual([note])
  })
})

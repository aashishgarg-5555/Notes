import React from 'react'
import AddNote from './AddNote'
import Note from './Note'
function NotesList(props) {
  return (
    <div className='notes-list'>
      {props.msgs.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} handledel={props.handledel}></Note>
      ))}
      <AddNote handle={props.handleadd}></AddNote>
    </div>
  )
}

export default NotesList
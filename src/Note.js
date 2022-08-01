import React from 'react'
import {MdDeleteForever} from 'react-icons/md'
function Note(props) {
  return (
    <div className='note'>
      <span>{props.text}</span>
      <div className='footer'>
        <small>{props.date}</small>
        <MdDeleteForever className='delete-icons' size='2em' onClick={()=>props.handledel(props.id)}></MdDeleteForever>
      </div>
    </div>
  )
}

export default Note
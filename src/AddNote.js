import React, {useState} from 'react'

function AddNote(props) {
    const [newText, setNewText] = useState("")
    const val= 200;
    const textchange = (event) =>{
        if(val-event.target.value.length>=0){
            setNewText(event.target.value);
        }
    }

    const savechange = () =>{
        if(newText.trim().length > 0){
            props.handle(newText);
            setNewText("");
        }
    }
  return (
    <div className='note new'>
        <textarea 
            rows="11" 
            cols="35" 
            value={newText}
            placeholder="Type to add a new note....."
            onChange={textchange}
        ></textarea>
        <div className='footer'>
            <small>{val-newText.length} remaining</small>
            <button className='save' onClick={savechange}>Save</button>
        </div>
    </div>
  )
}

export default AddNote
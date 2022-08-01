import React, {useState,useEffect} from 'react'
import {nanoid} from 'nanoid';
import NotesList from './NotesList'
import Search from './Search';
function App() {
  
  const [notes, setNotes] = useState([]);
  const [myStyle, setMyStyle] = useState(false)
  const [btnText, setBtnText] = useState("DARK MODE")
  
  const darkmode = ()=>{
    setMyStyle(!myStyle);
    if(!myStyle){
      setBtnText("LIGHT MODE");
    }
    else{
      setBtnText("DARK MODE");
    }
  }
  
  const [searchText, setSearchText] = useState("");
  
  useEffect(() => {
      const savedNotes = JSON.parse(
        localStorage.getItem("notesappdata")
      );
      if(savedNotes){
        setNotes(savedNotes);
      }
  },[]);
  
  useEffect(() => {
      localStorage.setItem(
        "notesappdata",
        JSON.stringify(notes)
      )
  },[notes]);
  
  const addnewcomp = (text) =>{
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes,newNote];
    setNotes(newNotes);
  }
  
  const delcomp = (id) =>{
    const updateNotes= notes.filter((note)=> note.id!==id);
    setNotes(updateNotes);
  }
  

  return (
    <div className={`${myStyle && 'dark-mode'}`}>
      <div className='overall'>
        <div className='title'>
          <h1>NOTES</h1>
          <button className='save' onClick={darkmode}>{btnText}</button>
        </div>
        <Search handlesearch={setSearchText}></Search>
        <NotesList msgs={notes.filter((note)=>note.text.toLowerCase().includes(searchText.toLowerCase()))} handleadd={addnewcomp} handledel={delcomp}></NotesList>
      </div>
    </div>
  )
}

export default App
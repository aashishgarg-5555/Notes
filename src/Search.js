import React from 'react'
import {MdSearch} from 'react-icons/md'
function Search(props) {
  return (
    <div className='search'>
        <MdSearch className='search-icons' size='2em'/>
        <input 
            type='text' 
            placeholder='Enter Text To Search....' 
            size="35" 
            onChange={(event) => props.handlesearch(event.target.value)}></input>
    </div>
  )
}

export default Search
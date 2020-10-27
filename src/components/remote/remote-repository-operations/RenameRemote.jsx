import React, { useState } from 'react';

const RenameRemote = () => {

const [currentName,setCurrentName] = useState('')
const [newName, setNewName] = useState('')

const handleCurrentNameame = (event) => {
    setCurrentName(event.target.value)
}
const handleNewName = (event) => {
    setNewName(event.target.value)
}

    return(
        <div>
            <h3>Input repository shortname and branch:</h3>
            <label htmlFor="currentName">Current name: </label>
            <input 
            type='text' 
            minLength='1' 
            onChange={handleCurrentNameame}
            placeholder='Write current name...'
            />
            <label htmlFor="newName">New name: </label>
            <input 
            type='text' 
            minLength='1' 
            onChange={handleNewName}
            placeholder='Write new name...'
            />
            <h3>Terminal git commands are:</h3>
           
            <p>git remote rename {currentName} {newName}</p>
            <p>Renames remote.</p>
            
        </div>
    )
}

export default RenameRemote
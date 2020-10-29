import React, { useState } from 'react';

const DeleteLocalBranch = () => {

const [name,setName] = useState('')

const handleOnChange = (event) => {
    setName(event.target.value)
}

    return(
        <div>
            <h3>Input name of branch to delete:</h3>
            <p>Deletes local branch.</p>
            <label htmlFor="name">Name: </label>
            <input 
            type='text' 
            minLength='1' 
            onChange={handleOnChange}
            placeholder='Write name of branch...'
            />
            <h3>Terminal git command is:</h3>
            <p>git branch -d {name}</p>
        </div>
    )
}

export default DeleteLocalBranch
import React, { useState } from 'react';

const SetGlobalName = () => {

const [name,setName] = useState('')

const handleOnChange = (event) => {
    setName(event.target.value)
}

    return(
        <div>
            <h3>Input Username:</h3>
            <label for="userName">Username: </label>
            <input 
            type='text' 
            minLength='1' 
            onChange={handleOnChange}
            placeholder='Write username...'
            />
            <h3>Terminal git command is:</h3>
            <p>git config --global user.name {name}</p>
        </div>
    )
}

export default SetGlobalName
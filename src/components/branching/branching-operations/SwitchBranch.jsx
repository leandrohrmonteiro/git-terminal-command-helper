import React, { useState } from 'react';

const SwitchBranch = () => {

const [name,setName] = useState('')

const handleOnChange = (event) => {
    setName(event.target.value)
}

    return(
        <div>
            <h3>Input name of branch to switch into:</h3>
            <label htmlFor="name">Name: </label>
            <input 
            type='text' 
            minLength='1' 
            onChange={handleOnChange}
            placeholder='Write name of branch...'
            />
            <h3>Terminal git command is:</h3>
            <p>git switch {name}</p>
        </div>
    )
}

export default SwitchBranch
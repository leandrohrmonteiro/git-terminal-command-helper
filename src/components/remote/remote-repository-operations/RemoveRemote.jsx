import React, { useState } from 'react';

const RemoveRemote = () => {

const [name,setName] = useState('')

const handleOnChange = (event) => {
    setName(event.target.value)
}

    return(
        <div>
            <h3>Input name of remote to remove:</h3>
            <label htmlFor="name">Name: </label>
            <input 
            type='text' 
            minLength='1' 
            onChange={handleOnChange}
            placeholder='Write name...'
            />
            <h3>Terminal git command is:</h3>
            <p>git remove {name}</p>
        </div>
    )
}

export default RemoveRemote
import React, { useState } from 'react';

const IgnoreFolder = () => {

const [message,setMessage] = useState('')

const handleOnChange = (event) => {
    setMessage(event.target.value)
}

    return(
        <div>
            <h3>Input folder to ignore:</h3>
            <label htmlFor="message">Folder: </label>
            <input 
            type='text' 
            minLength='1' 
            onChange={handleOnChange}
            placeholder='Write folder name...'
            />
            <h3>Terminal git command is:</h3>
            <p>{message}/</p>
        </div>
    )
}

export default IgnoreFolder
import React, { useState } from 'react';

const DontIgnoreFile = () => {

const [message,setMessage] = useState('')

const handleOnChange = (event) => {
    setMessage(event.target.value)
}

    return(
        <div>
            <h3>Input file to not ignore:</h3>
            <label htmlFor="message">File: </label>
            <input 
            type='text' 
            minLength='1' 
            onChange={handleOnChange}
            placeholder='Write filename...'
            />
            <h3>Terminal git command is:</h3>
            <p>!{message}</p>
        </div>
    )
}

export default DontIgnoreFile
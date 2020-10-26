import React, { useState } from 'react';

const IgnoreAllOfType = () => {

const [message,setMessage] = useState('')

const handleOnChange = (event) => {
    setMessage(event.target.value)
}

    return(
        <div>
            <h3>Input type of file to ignore:</h3>
            <label htmlFor="message">Type: </label>
            <input 
            type='text' 
            minLength='1' 
            onChange={handleOnChange}
            placeholder='Write type...'
            />
            <h3>Terminal git command is:</h3>
            <p>.{message}</p>
        </div>
    )
}

export default IgnoreAllOfType
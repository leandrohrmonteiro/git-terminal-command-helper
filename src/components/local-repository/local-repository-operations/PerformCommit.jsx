import React, { useState } from 'react';

const PerformCommit = () => {

const [message,setMessage] = useState('')

const handleOnChange = (event) => {
    setMessage(event.target.value)
}

    return(
        <div>
            <h3>Input commit message:</h3>
            <label htmlFor="message">Message: </label>
            <input 
            type='text' 
            minLength='1' 
            onChange={handleOnChange}
            placeholder='Write message...'
            />
            <h3>Terminal git command is:</h3>
            <p>git commit -m '{message}'</p>
        </div>
    )
}

export default PerformCommit
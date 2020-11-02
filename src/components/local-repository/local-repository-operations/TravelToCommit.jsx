import React, { useState } from 'react';

const TravelToCommit = () => {

const [message,setMessage] = useState('')

const handleOnChange = (event) => {
    setMessage(event.target.value)
}

    return(
        <div>
            <h3>Input commit hash:</h3>
            <label htmlFor="hash">Hash: </label>
            <input 
            type='text' 
            minLength='1' 
            onChange={handleOnChange}
            placeholder='Write commit hash...'
            />
            <h3>Terminal git command is:</h3>
            <p>git checkout {message}</p>
            <p>git checkout master (to return to latest commit)</p>
        </div>
    )
}

export default TravelToCommit
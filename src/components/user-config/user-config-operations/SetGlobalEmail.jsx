import React, { useState } from 'react'

const SetGlobalEmail = () => {

const [email, setEmail] = useState('')

const handleOnChange = (event) => {
    setEmail(event.target.value)
}

return(
    <div>
        <h3>Input email:</h3>
            <label for="email">Email: </label>
            <input 
            type='text' 
            minLength='1' 
            onChange={handleOnChange}
            placeholder='Write email...'
            />
            <h3>Terminal git command is:</h3>
            <p>git config --global user.email {email}</p>
    </div>
)
}

export default SetGlobalEmail
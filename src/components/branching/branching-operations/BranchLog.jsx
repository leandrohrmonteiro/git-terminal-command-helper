import React, { useState } from 'react';

const BranchLog = () => {

const [name,setName] = useState('')

const handleOnChange = (event) => {
    setName(event.target.value)
}

    return(
        <div>
            <h3>Input name of branch to see log of:</h3>
            <label htmlFor="name">Name: </label>
            <input 
            type='text' 
            minLength='1' 
            onChange={handleOnChange}
            placeholder='Write name of branch...'
            />
            <h3>Terminal git command is:</h3>
            <p>git log {name}</p>
            <p>git log --all (for log of all branches)</p>
        </div>
    )
}

export default BranchLog
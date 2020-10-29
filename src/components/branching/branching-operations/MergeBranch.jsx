import React, { useState } from 'react';

const MergeBranch = () => {

const [name,setName] = useState('')

const handleOnChange = (event) => {
    setName(event.target.value)
}

    return(
        <div>
            <h3>Input name of merging branch:</h3>
            <p>Merge branch into current branch.</p>
            <label htmlFor="name">Name: </label>
            <input 
            type='text' 
            minLength='1' 
            onChange={handleOnChange}
            placeholder='Write name of branch...'
            />
            <h3>Terminal git command is:</h3>
            <p>git merge {name}</p>
        </div>
    )
}

export default MergeBranch
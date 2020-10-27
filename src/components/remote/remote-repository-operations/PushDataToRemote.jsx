import React, { useState } from 'react';

const PushDataToRemote = () => {

const [branch,setBranch] = useState('')
const [shortname, setShortname] = useState('')

const handleShortname = (event) => {
    setShortname(event.target.value)
}
const handleBranch = (event) => {
    setBranch(event.target.value)
}

    return(
        <div>
            <h3>Input repository shortname and branch:</h3>
            <label htmlFor="shortNamee">Shortname: </label>
            <input 
            type='text' 
            minLength='1' 
            onChange={handleShortname}
            placeholder='Write shortname...'
            />
            <label htmlFor="branch">Branch: </label>
            <input 
            type='text' 
            minLength='1' 
            onChange={handleBranch}
            placeholder='Write branch...'
            />
            <h3>Terminal git commands are:</h3>
           
            <p>git push {shortname} {branch}</p>
            <p>Pushes data from current local repository branch to remote repository.(usually the same branch)</p>
            
        </div>
    )
}

export default PushDataToRemote
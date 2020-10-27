import React, { useState } from 'react';

const GetDataFromRemote = () => {

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
            <p>Retrieving data but not merging</p>
            <p>git fetch {shortname} (this will get the data from all branches of that repository)</p>
            <p>git fetch {shortname} {branch}</p>
            <p>Retrieving data but and merging</p>
            <p>git pull {shortname} (this will get the data from all branches of that repository)</p>
            <p>git pull {shortname} {branch}</p>
        </div>
    )
}

export default GetDataFromRemote
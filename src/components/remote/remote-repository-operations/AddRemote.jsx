import React, { useState } from 'react';

const AddRemote = () => {

const [url,setUrl] = useState('')
const [shortname, setShortname] = useState('')

const handleShortname = (event) => {
    setShortname(event.target.value)
}
const handleUrl = (event) => {
    setUrl(event.target.value)
}

    return(
        <div>
            <h3>Input repository shortname and url:</h3>
            <label htmlFor="shortNamee">Shortname: </label>
            <input 
            type='text' 
            minLength='1' 
            onChange={handleShortname}
            placeholder='Write shortname...'
            />
            <label htmlFor="url">Url: </label>
            <input 
            type='text' 
            minLength='1' 
            onChange={handleUrl}
            placeholder='Write url...'
            />
            <h3>Terminal git commands are:</h3>
            <p>git clone {shortname} (this will set the remote with the origin shortname)</p>
            <p>git remote add {shortname} {url}</p>
        </div>
    )
}

export default AddRemote
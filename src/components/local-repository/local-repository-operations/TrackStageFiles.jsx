import React, { useState } from 'react';

const TrackStageFiles = () => {

const [file,setFile] = useState('')

const handleOnChange = (event) => {
    setFile(event.target.value)
}

    return(
        <div>
            <h3>Input Filename:</h3>
            <label htmlFor="fileName">Filename: </label>
            <input 
            type='text' 
            minLength='1' 
            onChange={handleOnChange}
            placeholder='Write filename...'
            />
            <h3>Terminal git command is:</h3>
            <p>git add {file}</p>
            <p>git add . (for all files in folder)</p>
        </div>
    )
}

export default TrackStageFiles
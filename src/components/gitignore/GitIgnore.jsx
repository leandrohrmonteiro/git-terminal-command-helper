import React, { useState } from 'react';

import IgnoreAllOfType from './gitignore-operations/IgnoreAllOfType'
import DontIgnoreFile from './gitignore-operations/DontIgnoreFile'
import IgnoreAllInstancesOfFile from './gitignore-operations/IgnoreAllInstancesOfFile'
import IgnoreFileInRootFolder from './gitignore-operations/IgnoreFileInRootFolder'
import IgnoreFolder from './gitignore-operations/IgnoreFolder'

const GitIgnore = () => {

    const [operation, setOperation] = useState('')

    const handleOnChange = (event) => {
        setOperation(event.target.value)
    }

    const typeOfOperation = () => {
        if(operation === 'ignoreAllOfType') {return(<div><IgnoreAllOfType /></div>)}
        if(operation === 'dontIgnoreFile') {return(<div><DontIgnoreFile /></div>)}
        if(operation === 'ignoreAllInstancesOfFile') {return(<div><IgnoreAllInstancesOfFile /></div>)}
        if(operation === 'ignoreFileInRootFolder') {return(<div><IgnoreFileInRootFolder /></div>)}
        if(operation === 'ignoreFolder') {return(<div><IgnoreFolder /></div>)}
    }
    

    return(
        <div>
            <h3>User Config options:</h3>
            <h5>list of premade .gitignore files: https://github.com/github/gitignore</h5>

            <label htmlFor="userConfig">Choose a config operation: </label>
            <select name="repository" id="configOperations" onChange={handleOnChange}>
                <option value=''>None</option>
                <option value='ignoreAllInstancesOfFile'>Ignore all Instances of file</option>
                <option value='ignoreAllOfType'>Ignore files of type...</option>
                <option value='dontIgnoreFile'>Don't ignore file</option>
                <option value='ignoreFileInRootFolder'>Ignore file instance in root folder</option>
                <option value='ignoreFolder'>Ignore folder</option>

            </select>
            {typeOfOperation()}
        </div>
    )
}

export default GitIgnore
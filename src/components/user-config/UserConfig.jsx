import React, { useState } from 'react';

import SetGlobalName from './user-config-operations/SetGlobalName'
import SetGlobalEmail from './user-config-operations/SetGlobalEmail'

const UserConfig = () => {

    const [operation, setOperation] = useState('')

    const handleOnChange = (event) => {
        setOperation(event.target.value)
    }

    const typeOfOperation = () => {
        if(operation === 'setGlobalName') {return(<div><SetGlobalName /></div>)}
        if(operation === 'setGlobalEmail') {return(<div><SetGlobalEmail /></div>)}
    }
    

    return(
        <div>
            <h3>User Config options:</h3>

            <label htmlFor="userConfig">Choose a config operation: </label>
            <select name="repository" id="configOperations" onChange={handleOnChange}>
                <option value=''>None</option>
                <option value='setGlobalName'>Set global Username</option>
                <option value='setGlobalEmail'>Set global email</option>
            </select>
            {typeOfOperation()}
        </div>
    )
}

export default UserConfig
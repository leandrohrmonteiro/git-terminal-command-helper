import React, { useState } from 'react';

import CreateBranch from '../branching/branching-operations/CreateBranch'
import SwitchBranch from './branching-operations/SwitchBranch'
import BranchLog from './branching-operations/BranchLog'
import MergeBranch from './branching-operations/MergeBranch'
import DeleteLocalBranch from './branching-operations/DeleteLocalBranch'

const Branching = () => {

    const [operation, setOperation] = useState('')

    const handleOnChange = (event) => {
        setOperation(event.target.value)
    }

    const typeOfOperation = () => {
        if(operation === 'createBranch'){return(<div><CreateBranch /></div>)}
        if(operation === 'switchBranch'){return(<div><SwitchBranch /></div>)}
        if(operation === 'branchLog'){return(<div><BranchLog /></div>)}
        if(operation === 'mergeBranch'){return(<div><MergeBranch /></div>)}
        if(operation === 'deleteLocalBranch'){return(<div><DeleteLocalBranch /></div>)}
    }
    

    return(
        <div>
            <h3>Branching options:</h3>
            

            <label htmlFor="userConfig">Choose a config operation: </label>
            <select name="repository" id="configOperations" onChange={handleOnChange}>
                <option value=''>None</option>
                <option value='createBranch'>Create branch</option>
                <option value='switchBranch'>Switch into branch</option>
                <option value='branchLog'>See log of branch/s</option>
                <option value='mergeBranch'>Merge branch</option>
                <option value='deleteLocalBranch'>Delete local branch</option>

            </select>
            {typeOfOperation()}
        </div>
    )
}

export default Branching
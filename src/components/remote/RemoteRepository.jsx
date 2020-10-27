import React, { useState} from 'react'
import IdentifyRemotes from './remote-repository-operations/IdentifyRemotes'
import AddRemote from './remote-repository-operations/AddRemote'
import GetDataFromRepository from './remote-repository-operations/GetDataFromRemote'
import PushDataToRemote from './remote-repository-operations/PushDataToRemote'
import RenameRemote from './remote-repository-operations/RenameRemote'


const RemoteRepository = () => {

const [operation, setOperation] = useState('')

const handleOnChange = (event) => {
    setOperation(event.target.value)
}

const typeOfOperation = () => {
    if(operation === 'identifyRemotes'){return(<div><IdentifyRemotes /></div>)}
    if(operation === 'addRemote'){return(<div><AddRemote /></div>)}
    if(operation === 'getDataFromRemote'){return(<div><GetDataFromRepository /></div>)}
    if(operation === 'pushDataToRemote'){return(<div><PushDataToRemote /></div>)}
    if(operation === 'renameRemote'){return(<div><RenameRemote /></div>)}
}



    return(
        <div>
            <h3>
                Remote Repository Options:
            </h3>
            <label htmlFor="remoteOperation">Choose a local operation: </label>
            <select id="remoteOperation" onChange={handleOnChange}>
                <option value=''>None</option>
                <option value='identifyRemotes'>Identify remotes names and urls</option>
                <option value='addRemote'>Add remote repository</option>
                <option value='getDataFromRemote'>Get data from remote</option>
                <option value='pushDataToRemote'>Push local data to remote repository</option>
                <option value='renameRemote'>Rename remote repository</option>
            </select>
            {typeOfOperation()}
        </div>
    )
}

export default RemoteRepository
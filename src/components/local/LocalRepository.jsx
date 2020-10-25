import React, {useState} from 'react'

import StartLocalRepository from './local-repository-operations/StartLocalRepository'
import CheckRepositoryStatus from './local-repository-operations/CheckRepositoryStatus'
import TrackStageFiles from './local-repository-operations/TrackStageFiles'
import UnstageFiles from './local-repository-operations/UnstageFiles'
import ForceRemoveFile from './local-repository-operations/ForceRemoveFile'
import PerformCommit from './local-repository-operations/PerformCommit'
import CommitAmmend from './local-repository-operations/CommitAmmend'
import SeeCommitLog from './local-repository-operations/SeeCommitLog'
import TravelToCommit from './local-repository-operations/TravelToCommit'


const LocalRepository = () => {

const [operation, setOperation] = useState('')

const handleOnChange = (event) => {
    setOperation(event.target.value)
}

const typeOfOperation = () => {
    if(operation === 'startLocalRepository') {return(<div><StartLocalRepository /></div>)}
    if(operation === 'checkRepositoryStatus') {return(<div><CheckRepositoryStatus /></div>)}
    if(operation === 'trackStageFiles') {return(<div><TrackStageFiles /></div>)}
    if(operation === 'unstageFiles') {return(<div><UnstageFiles /></div>)}
    if(operation === 'performCommit') {return(<div><PerformCommit /></div>)}
    if(operation === 'forceRemoveFile') {return(<div><ForceRemoveFile /></div>)}
    if(operation === 'commitAmmend') {return(<div><CommitAmmend /></div>)}
    if(operation === 'seeCommitLog') {return(<div><SeeCommitLog /></div>)}
    if(operation === 'travelToCommit') {return(<div><TravelToCommit /></div>)}  
}


    return(
        <div>
            <h3>
                Local Repository Options:
            </h3>
            <label htmlFor="localOperation">Choose a local operation: </label>
            <select id="localOperation" onChange={handleOnChange}>
                <option value=''>None</option>
                <option value='startLocalRepository'>Start local Repository</option>
                <option value='checkRepositoryStatus'>Check Repository status</option>
                <option value="trackStageFiles">Track/stage files</option>
                <option value="unstageFiles">Unstage files</option>
                <option value="forceRemoveFile">Force Removal of file</option>
                <option value="performCommit">Commit files</option>
                <option value="commitAmmend">Ammend latest commit</option>
                <option value="seeCommitLog">See log of commits performed</option>
                <option value="travelToCommit">Travel to specific commit</option>
            </select>
            {typeOfOperation()}
        </div>
    )
}

export default LocalRepository
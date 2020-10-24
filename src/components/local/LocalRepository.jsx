import React, {useState} from 'react'

import StartLocalRepository from './local-repository-operations/StartLocalRepository'
import CheckRepositoryStatus from './local-repository-operations/CheckRepositoryStatus'
import TrackStageFiles from './local-repository-operations/TrackStageFiles'
import UnstageFiles from './local-repository-operations/UnstageFiles'
import PerformCommit from './local-repository-operations/PerformCommit'

const LocalRepository = () => {

const [operation, setOperation] = useState('')

const handleOnChange = (event) => {
    setOperation(event.target.value)
}

const typeOfOperation = () => {
    if(operation === 'startLocalRepository') {
        return(
            <div>
                <StartLocalRepository />
            </div>
        )   
    }
    if(operation === 'checkRepositoryStatus') {
        return(
            <div>
                <CheckRepositoryStatus />
            </div>
        )   
    }
    if(operation === 'trackStageFiles') {
        return(
            <div>
                <TrackStageFiles />
            </div>
        )   
    }
    if(operation === 'unstageFiles') {
        return(
            <div>
                <UnstageFiles />
            </div>
        )   
    }
    if(operation === 'performCommit') {
        return(
            <div>
                <PerformCommit />
            </div>
        )   
    }
}


    return(
        <div>
            <h3>
                Local Repository Options:
            </h3>
            
            <label for="cars">Choose a local operation: </label>
            <select name="cars" id="cars" onChange={handleOnChange}>
                <option value=''>None</option>
                <option value='startLocalRepository'>Start local Repository</option>
                <option value='checkRepositoryStatus'>Check Repository status</option>
                <option value="trackStageFiles">Track/stage files</option>
                <option value="unstageFiles">Unstage files</option>
                <option value="performCommit">Commit files</option>
            </select>
            {typeOfOperation()}
        </div>
       
    )
}

export default LocalRepository
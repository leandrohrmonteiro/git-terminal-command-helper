import React from 'react'

const SeeCommitLog = () => {
    return(
        <div>
            <h3>Terminal git command is: </h3>
            <p>git log</p>
            <p>git log --pretty=oneline (to see hash and message in one line)</p>
        </div>
        
    )
}

export default SeeCommitLog
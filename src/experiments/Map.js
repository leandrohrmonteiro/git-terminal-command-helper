import React from 'react'
import StartLocalRepository from '../components/local/local-repository-operations/StartLocalRepository'
import CheckRepositoryStatus from '../components/local/local-repository-operations/CheckRepositoryStatus'

const Map = [
    {
        message:'yes',
        operationName:'startLocalRepository',
        operationComponent:<StartLocalRepository />
    },
    {
        message:'no',
        operationName:'checkRepositoryStatus',
        operationComponent:<CheckRepositoryStatus />
    },
    {
        message:'no'
    },
    {
        message:'yes'
    }
]

export default Map
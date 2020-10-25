import React, {useState} from 'react'
import Map from './Map'












const Test = () => {

    const testComponent = Map.map((message)=>{return(message.operationComponent)}) 
    const testOperation = Map.map((message)=>{return(message.operationName)}) 

const [operation, setOperation] = useState('')
    const handleOnChange = (event) => {
        setOperation(event.target.value)
    }
    
    const typeOfOperation = () => { if(operation=== testOperation){return(<div>{testComponent}</div>)}}



    return(
        <div>
        <select id="localOperation" onChange={handleOnChange}>
                <option value=''>None</option>
                <option value='checkRepositoryStatus'>Start local Repository</option>
        </select>
        {typeOfOperation()}
        </div>
    )}


export default Test
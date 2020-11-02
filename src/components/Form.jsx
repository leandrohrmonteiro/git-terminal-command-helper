import React, {useState} from 'react'

import FormOperationOptions from './FormOperationOptions'
import UserConfig from './user-config/UserConfig'
import GitIgnore from './git-ignore/GitIgnore'
import LocalRepository from './local-repository/LocalRepository'



const Form = () => {

const[operation, setOperation] = useState('')

const selectOperationOnChange = (event) =>{
  setOperation(event.target.value);
} 
 



const renderAllOperations = (value, key) => { 
    return(
<div key={key}>
      <input type='radio'  
      value={value} 
      checked={value===operation? true:false}
      readOnly
      />
      <label htmlFor={value}>{value}</label><br/>
  </div>
    )
  }

const selectedOperation = () => {
  if(operation === 'User configuration'){return(<div><UserConfig /></div>)}
  if(operation === 'Gitignore'){return(<div><GitIgnore /></div>)}
  if(operation === 'Local repository'){return(<div><LocalRepository /></div>)}
}



return(
  <div>
  <h3>Choose operation type:</h3>
  <form onChange={selectOperationOnChange}>
      {FormOperationOptions.map((operations)=>{
      return renderAllOperations(operations.selectedOption, operations.id);})}
  </form>          
      {selectedOperation()}
    </div>
  )
}
export default Form
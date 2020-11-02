import React, {useState} from 'react'

import UserConfigOptions from './UserConfigOptions'
import OptionComponent from './OptionComponent'

const UserConfig = () =>{

  const[option, setOption] = useState('None')

  const selectOptionOnChange = (event) =>{setOption(event.target.value)} 
  
  const renderAllOptions = (value) => {
    return(
    <option key={value} value={value}>{value}</option>)}

//render selected option
const filterUserConfigOptions = UserConfigOptions.filter(selection => selection.selectedOption === option)
const filteredResult = filterUserConfigOptions.map(result => [result.selectedOption, result.label, result.code, result.description])
//deconstructing the filtered result array
const[resultObject] = filteredResult
const[ resultOption, resultLabel, resultCode, resultDescription ] = resultObject


const renderOptionComponent = () => {
if(resultOption === option && resultOption !== 'None'){
  return(<OptionComponent label={resultLabel} code={resultCode} description={resultDescription} />)}
}


  return(
    <div> 
<h3>Choose user configuration option:</h3>

<select onChange={selectOptionOnChange}>
{UserConfigOptions.map((options)=>{
  return renderAllOptions(options.selectedOption);})}
 </select> 
{renderOptionComponent()}
    </div>
  )
}

export default UserConfig
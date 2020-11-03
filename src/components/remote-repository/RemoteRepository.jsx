import React, {useState} from 'react'

import RemoteRepositoryOptions from './RemoteRepositoryOptions'
import RemoteRepositoryComponent from './RemoteRepositoryComponent'

const RemoteRepository = () => {

const[option, setOption] = useState('None')
const selectOptionOnChange = (event) => {setOption(event.target.value)}
//render all options
const renderAllOptions = (value) => {
return(
<option key={value} value={value}>{value}</option>)}
//render selected option
const filterRemoteRepositoryOptions = RemoteRepositoryOptions.filter(selection=>selection.selectedOption === option)
const filteredResult = filterRemoteRepositoryOptions.map(result => [
  result.selectedOption,
  result.label, 
  result.aditionalLabel, 
  result.hasUserInput,
   result.hasMultipleUserInput, 
   result.isItAMessage, 
   result.codeBeforeInput , 
   result.code, 
   result.description])
//deconstructing the filtered result array
const[resultObject] = filteredResult
const[resultOption, 
  resultLabel, 
  resultAditionalLabel, 
  resulthasuserinput, 
  resulthasmultipleuserinput, 
  resultisitamessage,
  resultCodeBeforeInput,
  resultCode, 
  resultDescription] = resultObject




const renderRemoteRepositoryComponent = () => {
if(resultOption === option && resultOption !== 'None'){
  return(<RemoteRepositoryComponent 
  label={resultLabel} 
  aditionallabel={resultAditionalLabel}
  hasuserinput={resulthasuserinput} 
  hasmultipleuserinput={resulthasmultipleuserinput} 
  isitamessage={resultisitamessage}
  codebeforeinput={resultCodeBeforeInput} 
  code={resultCode} 
  description={resultDescription} />)}
}

  
  return(
<div>
<h3>Choose remote repository option:</h3>
<select onChange={selectOptionOnChange}>
{RemoteRepositoryOptions.map((options)=>{
return renderAllOptions(options.selectedOption);})}
</select>
{renderRemoteRepositoryComponent()}
</div>
  )
}
export default RemoteRepository
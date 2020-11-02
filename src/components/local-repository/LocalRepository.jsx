import React, {useState} from 'react'

import LocalRepositoryOptions from './LocalRepositoryOptions'
import LocalRepositoryComponent from './LocalRepositoryComponent'

const LocalRepository = () => {

const[option, setOption] = useState('None')
const selectOptionOnChange = (event) => {setOption(event.target.value)}
//render all options
const renderAllOptions = (value) => {
return(
<option key={value} value={value}>{value}</option>)}
//render selected option
const filterLocalRepositoryOptions = LocalRepositoryOptions.filter(selection=>selection.selectedOption === option)
const filteredResult = filterLocalRepositoryOptions.map(result => [
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




const renderLocalRepositoryComponent = () => {
if(resultOption === option && resultOption !== 'None'){
  return(<LocalRepositoryComponent 
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
<h3>Choose local repository option:</h3>
<select onChange={selectOptionOnChange}>
{LocalRepositoryOptions.map((options)=>{
return renderAllOptions(options.selectedOption);})}
</select>
{renderLocalRepositoryComponent()}
</div>
  )
}
export default LocalRepository
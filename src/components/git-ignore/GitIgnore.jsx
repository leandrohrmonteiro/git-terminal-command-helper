import React, {useState} from 'react'

import GitIgnoreOptions from './GitIgnoreOptions'
import GitIgnoreComponent from './GitIgnoreComponent'

const GitIgnore = () => {

const[option, setOption] = useState('None')
const selectOptionOnChange = (event) => {setOption(event.target.value)}
//render all options
const renderAllOptions = (value) => {
return(
<option key={value} value={value}>{value}</option>)}
//render selected option
const filterGitIgnoreOptions = GitIgnoreOptions.filter(selection=>selection.selectedOption === option)
const filteredResult = filterGitIgnoreOptions.map(result => [result.selectedOption, result.label,result.codeBeforeInput , result.code, result.description])
//deconstructing the filtered result array
const[resultObject] = filteredResult
const[resultOption, resultLabel, resultCodeBeforeInput,resultCode, resultDescription] = resultObject




const renderGitIgnorecomponent = () => {
if(resultOption === option && resultOption !== 'None'){
  return(<GitIgnoreComponent label={resultLabel} codebeforeinput={resultCodeBeforeInput} code={resultCode} description={resultDescription} />)}
}

  
  return(
<div>
<h3>Choose GitIgnore option:</h3>
<select onChange={selectOptionOnChange}>
{GitIgnoreOptions.map((options)=>{
return renderAllOptions(options.selectedOption);})}
</select>
{renderGitIgnorecomponent()}
</div>
  )
}
export default GitIgnore
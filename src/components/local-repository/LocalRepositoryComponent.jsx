import React, {useState} from 'react'

const LocalRepositoryComponent = (props) =>{

const [inputA, setInputA] = useState('')
const [inputB, setInputB] = useState('')

const handleOnChangeA = (event) =>{
setInputA(event.target.value)
}
const handleOnChangeB = (event) =>{
    setInputB(event.target.value)
    }

const whatCommandConfigurationToDisplay = () =>{
    if(props.hasuserinput===true){
        if(props.hasmultipleuserinput===true){
            return(  
            <div>
            <h3>Input {props.label}</h3>
                <h5>{props.description}</h5>
              <label htmlFor={props.label}>{props.label}: </label>
              <input
              type='text'
              minLength='1'
              onChange={handleOnChangeA}
              placeholder='write...'
              />
              
              <label htmlFor={props.aditionallabel}>{props.aditionallabel}: </label>
              <input
              type='text'
              minLength='1'
              onChange={handleOnChangeB}
              placeholder='write...'
              />
              <h3>Git terminal command is:</h3>
              {props.codebeforeinput===true ? <p>{props.code} {inputA}{inputB}</p> : <p>{inputA} {inputB}{props.code}</p>}
              </div>
            )
        }
        if(props.hasmultipleuserinput===false && props.isitamessage===false){
            return(  
                <div>
                <h3>Input {props.label}</h3>
                    <h5>{props.description}</h5>
                  <label htmlFor={props.label}>{props.label}: </label>
                  <input
                  type='text'
                  minLength='1'
                  onChange={handleOnChangeA}
                  placeholder='write...'
                  />
                  <h3>Git terminal command is:</h3>
                  {props.codebeforeinput===true ? <p>{props.code} {inputA}</p> : <p>{inputA} {props.code}</p>}
                  </div>
                )
        }
        if(props.hasmultipleuserinput===false && props.isitamessage===true){
            return(  
                <div>
                <h3>Input {props.label}</h3>
                    <h5>{props.description}</h5>
                  <label htmlFor={props.label}>{props.label}: </label>
                  <input
                  type='text'
                  minLength='1'
                  onChange={handleOnChangeA}
                  placeholder='write...'
                  />
                  <h3>Git terminal command is:</h3>
                  {props.codebeforeinput===true ? <p>{props.code} '{inputA}'</p> : <p>'{inputA}'' {props.code}</p>}
                  </div>
                )
        }
    }
    if(props.hasuserinput===false){
        return(  
            <div>
            <h3>{props.label}:</h3>
                <h5>{props.description}</h5>
              
              <h3>Git terminal command is:</h3>
              <p>{props.code}</p>
              </div>
            )
    }
}


return(
<div>
{whatCommandConfigurationToDisplay()}
</div>
  )
}

export default LocalRepositoryComponent
import React, { useState } from 'react';

const OptionComponent= (props) => {

  
    const [input,setInput] = useState('')

    const handleOnChange = (event) => {
        setInput(event.target.value)
    }
    
        return(
            <div>
                <h3>Input {props.label}:</h3>
                <h5>{props.description}</h5>
                <label htmlFor={props.label}>{props.label}: </label>
                <input 
                type='text' 
                minLength='1' 
                onChange={handleOnChange}
                placeholder='Write...'
                />
                <h3>Git terminal command is:</h3>
                <p>{props.code} {input}</p>
            </div>
        )
    }

export default OptionComponent
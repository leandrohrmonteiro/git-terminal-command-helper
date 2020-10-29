import React, { useState } from 'react';

import UserConfig from './user-config/UserConfig'
import GitIgnore from './gitignore/GitIgnore'
import LocalRepository from './local/LocalRepository'
import RemoteRepository from './remote/RemoteRepository'
import Branching from './branching/Branching'


const Form = () => {

   
        const [repository, setRepository] = useState('')
        
        const handleChange = (event) => {
            setRepository(event.target.value)
        }

        const typeOfRepository = () => {
            if(repository === 'userConfig') {return(<div><UserConfig /></div>)}
            if(repository === 'gitIgnore') {return(<div><GitIgnore /></div>)}
            if(repository === 'local') {return(<div><LocalRepository /></div>)}
            if(repository === 'remote') {return(<div><RemoteRepository /></div>)} 
            if(repository === 'branching') {return(<div><Branching /></div>)} 
        }

    return(
        <div>
        <h3>Choose operation type:</h3>
            <form>
                <input type='radio' 
                id='user' 
                name='repository' 
                value='userConfig' 
                onChange={handleChange}
                />
                <label htmlFor='user'>User Configuration</label><br/>

                <input type='radio' 
                id='gitIgnore' 
                name='repository' 
                value='gitIgnore' 
                onChange={handleChange}
                />
                <label htmlFor='gitIgnore'>GitIgnore</label><br/>

                <input type='radio' 
                id='local' 
                name='repository' 
                value='local' 
                onChange={handleChange}
                />
                <label htmlFor='local'>Local Repository</label><br/>

                <input type='radio' 
                id='remote' 
                name='repository' 
                value='remote' 
                onChange={handleChange}
                />
                <label htmlFor='remote'>Remote Repository</label><br/>
            

            <input type='radio' 
                id='branching' 
                name='repository' 
                value='branching' 
                onChange={handleChange}
                />
                <label htmlFor='branching'>Branching</label><br/>
            </form>
            
            {typeOfRepository()}
        </div>
    )
    
}

export default Form
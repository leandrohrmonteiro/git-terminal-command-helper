import React, { useState } from 'react';

import UserConfig from './user-config/UserConfig'
import LocalRepository from './local/LocalRepository'
import RemoteRepository from './remote/RemoteRepository'


const Form = () => {

   
        const [repository, setRepository] = useState('')
        
        const handleChange = (event) => {
            setRepository(event.target.value)
        }

        const typeOfRepository = () => {
            if(repository === 'userConfig') {
                return(
                    <div>
                        <UserConfig />
                    </div>
                )   
            }
            if(repository === 'local') {
                return(
                    <div>
                        <LocalRepository />
                    </div>
                )   
            }
            if(repository === 'remote') {
                return(
                    <div>
                        <RemoteRepository />
                    </div>
                )
            } 
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
            </form>
            
            {typeOfRepository()}
        </div>
    )
    
}

export default Form
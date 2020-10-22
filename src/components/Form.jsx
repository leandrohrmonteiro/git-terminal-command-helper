import React, { useState } from 'react';

import LocalRepository from './local/LocalRepository'
import RemoteRepository from './remote/RemoteRepository'


const Form = () => {

   
        const [repository, setRepository] = useState('')
        const handleChange = (event) => {
            setRepository(event.target.value)
        }

        const typeOfRepository = () => {
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
        <h3>Choose repository</h3>
            <form>
                <input type='radio' 
                id='local' 
                name='repository' 
                value='local' 
                onChange={handleChange}

                />
                <label htmlFor='local'>Local</label><br/>
                <input type='radio' 
                id='remote' 
                name='repository' 
                value='remote' 
                onChange={handleChange}
                />
                <label htmlFor='remote'>Remote</label><br/>
            </form>
            <p>repository is {repository}</p>
            {typeOfRepository()}
        </div>
    )
    
}

export default Form
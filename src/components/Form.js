import { useState } from 'react'
import Input from './Input'
import Table from './Table'

import teamsApi from '../apis/teamsApi'

const Form = () => {
    const [team, setTeam] = useState([])
    const [errorMessage, setErrorMessage] = useState('')


    const getTeamsByName = async (input) => {

        try {
            const { data } = await teamsApi.get('/Teams/GetTeamByName', {
                params: {
                    'name': input
                }
            })
            setTeam(data)
            setErrorMessage('')
        } catch (e) {
            console.log('ERROR getTeamsByName: ' + e)
            setErrorMessage('Team Name Not Found')
        }
        
    }
       

    return (
        <div>
        <h3 className='mt-5'>Team Search</h3>
            <Input inputId="teams-by-name" 
                label="Search Teams by Exact Name"
                btnText="Go!"
                inputSubmit={getTeamsByName}
            />
            {(errorMessage !== '') ? 
                <h4 className='mt-5'>{errorMessage}</h4> 
                : 
                <>
                    <h3 className='mt-5'>Team Search Result:</h3>
                    <Table tableHeader1="ID" tableHeader2="Team Name" tableData={team}/>
                </>
            }
        </div>
    )
}

export default Form
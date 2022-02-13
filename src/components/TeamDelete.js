import { useState } from 'react'
import Input from './Input'
import Table from './Table'

import teamsApi from '../apis/teamsApi'

const TeamDelete = ({ onTeamDelete }) => {
    const [team, setTeam] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [showResults, setShowResults] = useState(false)


    const getTeamsByName = async (input) => {

        try {
            const { data } = await teamsApi.delete(`/Teams/${input}`, {})
            setTeam(data)
            onTeamDelete()
            setErrorMessage('')
            setShowResults(true)
        } catch (e) {
            console.log('ERROR getTeamsByName: ' + e)
            setErrorMessage('Team ID not found')
            setShowResults(false)
        }
        
    }
       

    return (
        <div className='mb-5'>
            <h3 className='mt-5'>Team Delete</h3>
                <Input inputId="teams-by-name" 
                    label="ID Number of Team to Delete - NUMBER ONLY!"
                    btnText="Go!"
                    inputSubmit={getTeamsByName}
                />

            {errorMessage &&
                <h4 className='mt-5'>{errorMessage}</h4> 
            }
            {showResults &&
                <>
                    <h3 className='mt-5'>Team Deleted:</h3>
                    <Table tableHeader1="ID" tableHeader2="Team Name" tableData={team}/>
                </>
            }
            
           
        </div>
    )
}

export default TeamDelete
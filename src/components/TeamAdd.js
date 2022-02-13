import { useState } from 'react'
import Input from './Input'
import Table from './Table'

import teamsApi from '../apis/teamsApi'

const TeamAdd = ({ onTeamAdd }) => {
    const [team, setTeam] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [showResults, setShowResults] = useState(false)


    const getTeamsByName = async (input) => {

        try {
            const { data } = await teamsApi.post('/Teams', {
                'id': 0,
                'name': input
                }
            )
            setTeam(data)
            onTeamAdd()
            setErrorMessage('')
            setShowResults(true)
        } catch (e) {
            console.log('ERROR getTeamsByName: ' + e)
            setErrorMessage('Error Creating New Team')
            setShowResults(false)
        }
    }

    return (
        <div>
            <h3 className='mt-5'>Add A Team</h3>
                <Input inputId="teams-by-name" 
                    label="Name of Team to Add"
                    btnText="Go!"
                    inputSubmit={getTeamsByName}
                />

            {errorMessage &&
                <h4 className='mt-5'>{errorMessage}</h4> 
            }
            {showResults &&
                <>
                    <h3 className='mt-5'>Team Added:</h3>
                    <Table tableHeader1="ID" tableHeader2="Team Name" tableData={team}/>
                </>
            }
        </div>
    )
}

export default TeamAdd
import { useState, useEffect } from 'react'
import Table from './Table'

import teamsApi from '../apis/teamsApi'

const Teams = ({ teamsUpdate, onUpdate }) => {
    const [teams, setTeams] = useState([])

    useEffect(() => {
        const getTeamsByName = async () => {

        
            const { data } = await teamsApi.get('/Teams', {})
            setTeams(data)
        }

        getTeamsByName()
    }, [teamsUpdate])
       

    return (
        <div>
            <h3 className='mt-5'>Teams</h3>
            <Table tableHeader1="ID" tableHeader2="Team Name" tableData={teams}/>
        </div>
    )
}

export default Teams
import React from 'react'

import Header from './Header'
import Teams from './Teams'
import TeamSearch from './TeamSearch'
import TeamAdd from './TeamAdd'
import TeamDelete from './TeamDelete'
import Route from '../route/Route'

export default class App extends React.Component {
    state = {teamsChange: false}


    onTeamChange = () => {
        this.setState({teamsChange: !this.state.teamsChange})
    }

    render() {

        return (
            <div className='container'>
                <Header />
                <Teams 
                    teamsUpdate={this.state.teamsChange}
                />
                <br />
                <Route path="/team-by-name">
                    <TeamSearch />
                </Route>
                <Route path="/add-team">
                    <TeamAdd onTeamAdd={this.onTeamChange}/>
                </Route>
                <Route path="/delete-team">
                    <TeamDelete onTeamDelete={this.onTeamChange}/>
                </Route>
            </div>
        )
    }
}

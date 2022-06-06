import React from 'react';
import { Card, DropdownButton, Dropdown, ButtonGroup, Button } from 'react-bootstrap';
import { BrowserRouter, Link } from 'react-router-dom';
import '../App.css'; 
import {config} from '../config'

class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error:null,
      isLoaded: false,
      teams: [],
      leagueFilter: '',
      isLeagueFilterSet: false,
      divisionFilter: '',
      isDivFilterSet: false
    };
    this.setLeagueFilter = this.setLeagueFilter.bind(this);
    this.setDivisionFilter = this.setDivisionFilter.bind(this);
  }

  componentDidMount() {
    fetch('http://brew-roster-svc.us-e2.cloudhub.io/api/teams', {
      method: 'GET',
      headers: {
        'api-key': config.API_KEY
      }
    })
    .then(response => response.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          teams: result
        });
      }
    )
  }

  setLeagueFilter(league, filterSet) {
    this.setState({
      leagueFilter: league,
      divisionFilter: '',
      isLeagueFilterSet: filterSet,
      isDivFilterSet: false
    })
  }

  setDivisionFilter(division, filterSet) {
    this.setState({
      divisionFilter: division,
      leagueFilter: '',
      isDivFilterSet: filterSet,
      isLeagueFilterSet: false
    })
  }

  render () {
    const { error, isLoaded, teams } = this.state;
    return(
      <div className='App'>
        <div>
          <h1 >MLB Teams</h1>
        </div>
        <div>
          <button onClick={() => this.setLeagueFilter('', false)}>All Teams</button>
          <br />
          <button className='button' onClick={() => this.setLeagueFilter('National League', true)}>National League</button>
          <button className='button' onClick={() => this.setLeagueFilter('American League', true)}>American League</button>
          <br />
          <button onClick={() => this.setDivisionFilter('National League East', true)}>National League East</button>
          <button onClick={() => this.setDivisionFilter('National League West', true)}>National League West</button>
          <button onClick={() => this.setDivisionFilter('National League Central', true)}>National League Central</button>
          <button onClick={() => this.setDivisionFilter('American League East', true)}>American League East</button>
          <button onClick={() => this.setDivisionFilter('American League West', true)}>American League West</button>
          <button onClick={() => this.setDivisionFilter('American League Central', true)}>American League Central</button>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        { teams.filter(x =>
          (x.leage == this.state.leagueFilter) && (this.state.isLeagueFilterSet)).map((team) => (
          <Link to={`/teams/${ team.id }/players`} style={{ textDecoration: 'none' }}>
          <Card className='Card'>
              <Card.Img style={{ width: '50px', height: '50px' }} src={team.logo} />
              <Card.Text>
                <b>{team.name}</b>
                <br />
                <p style={{ fontSize: 'medium' }}>{team.division}</p>
              </Card.Text>
            </Card></Link>
        )) }
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        { teams.filter(x =>
          (x.division == this.state.divisionFilter) && (this.state.isDivFilterSet)).map((team) => (
          <Link to={`/teams/${ team.id }/players`} style={{ textDecoration: 'none' }}>
          <Card className='Card'>
              <Card.Img style={{ width: '50px', height: '50px' }} src={team.logo} />
              <Card.Text>
                <b>{team.name}</b>
                <br />
                <p style={{ fontSize: 'medium' }}>{team.division}</p>
              </Card.Text>
            </Card></Link>
        )) }
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        { teams.filter(x =>
          (!this.state.isLeagueFilterSet) && (!this.state.isDivFilterSet)).map((team) => (
          <Link to={`/teams/${ team.id }/players`} style={{ textDecoration: 'none' }}>
          <Card className='Card'>
              <Card.Img style={{ width: '50px', height: '50px' }} src={team.logo} />
              <Card.Text>
                <b>{team.name}</b>
                <br />
                <p style={{ fontSize: 'medium' }}>{team.division}</p>
              </Card.Text>
            </Card></Link>
        )) }
        </div>
      </div>
    );
  }
}

export default Teams;
import React from 'react';
import { Card, DropdownButton, Dropdown } from 'react-bootstrap';
import { BrowserRouter, Link } from 'react-router-dom';
import '../App.css';

class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error:null,
      isLoaded: false,
      teams: [],
      filter: ''
    };
  }

  componentDidMount() {
    fetch('http://brew-roster-svc.us-e2.cloudhub.io/api/teams', {
      method: 'GET',
      headers: {
        'api-key': '0ca80ddc-63f6-476e-b548-e5fb0934fc4b'
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

  render () {
    const { error, isLoaded, teams } = this.state;
    return(
      <div className='App'>
        <div>
          <h1 >MLB Teams</h1>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        { teams.filter(x => x.leage != this.state.filter).map((team) => (
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
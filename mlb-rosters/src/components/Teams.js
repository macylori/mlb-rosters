import React from 'react';
import { Card } from 'react-bootstrap';
import { BrowserRouter, Link } from 'react-router-dom';
import '../App.css';

class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error:null,
      isLoaded: false,
      teams: []
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
  
  // <Link to={`/teams/${team.id}/players`}>{team.name}</Link>
  render () {
    const { error, isLoaded, teams } = this.state;
    return(
      <div>
        <h1 style={{ textAlign: 'center' }}>MLB Teams</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        { teams.map((team) => (
          <Card className='Card'>
              <Card.Img style={{ width: '50px', height: '50px' }} src={team.logo} />
              <Card.Text><Link to={`/teams/${ team.id }/players`}>{team.name}</Link></Card.Text>
            </Card>
        )) }
        </div>
      </div>
    );
  }
}

export default Teams;
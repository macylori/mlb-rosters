import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from 'react';

class Roster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error:null,
      isLoaded: false,
      players: [],
      url: 'http://brew-roster-svc.us-e2.cloudhub.io/api/teams/' + window.location.pathname.substring(7,10) + '/players'
    };
  }

  componentDidMount() {
    fetch(this.state.url, {
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
          players: result
        });
      }
    )
  }

  render () {
    const { error, isLoaded, players } = this.state;
    return(
      <div>
        <h1 style={{ textAlign: 'center' }}>Team Roster</h1>
        <div style={{ alignItems: 'center' }}>
        { players.map((player) => (
          <ul>
            <Link to={`/player/${ player.id }`}><li>{player.name}</li></Link>
          </ul>
        )) }
      </div>
      </div>
    );
  }
}

export default Roster;
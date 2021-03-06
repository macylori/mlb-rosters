import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from 'react';
import {config} from '../config'

class Roster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error:null,
      isLoaded: false,
      players: [],
      url: 'http://brew-roster-svc.us-e2.cloudhub.io/api/teams/' + window.location.pathname.substring(7,10) + '/players',
      playerPhoto: []
    };
    this.getPhoto = this.getPhoto.bind(this);
  }

  componentDidMount() {
    fetch(this.state.url, {
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
          players: result
        });
      }
    )
  }

  getPhoto(id) {
    var url = 'http://brew-roster-svc.us-e2.cloudhub.io/api/player/' + id
    fetch(url, {
      method: 'GET',
      headers: {
        'api-key': '0ca80ddc-63f6-476e-b548-e5fb0934fc4b'
      }
    })
    .then(response => response.json())
    .then(
      (result) => {
        console.log('Result', result)
        this.setState({
          playerPhoto: result.picture
        })
      }
    )
  }

  // <img src={ () => this.getPhoto(player.id) } />
  render () {
    const { error, isLoaded, players } = this.state;
    return(
      <div className='App'>
        <h1 style={{ textAlign: 'center' }}>Team Roster</h1>
        <div style={{ alignItems: 'center' }}>
        { players.map((player) => (
          <div>
            <p style={{ textDecoration: 'none' }}>
              <Link to={`/player/${ player.id }`} style={{ textDecoration: 'none', color: 'black' }}>{player.name}</Link>
            </p>
          </div>
        )) }
      </div>
      </div>
    );
  }
}

export default Roster;
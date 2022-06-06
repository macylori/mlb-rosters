import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from 'react';
import {config} from '../config'

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error:null,
      isLoaded: false,
      player: [],
      url: 'http://brew-roster-svc.us-e2.cloudhub.io/api/player/' + window.location.pathname.substring(8)
    };
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
          player: result
        });
      }
    )
  }

  render () {
    const { error, isLoaded, player } = this.state;
    let city = player.birthCity
    if (player.birthStateProvince != null) {
      city += ', ' + player.birthStateProvince
    }
    city += ', ' + player.birthCountry
    return(
      <div className='App'>
        <div className='Player'>
          <img src={player.picture} />
          <h1>{player.firstName} {player.lastName} #{player.number}</h1>
          <p><b>Position:</b> {player.primaryPosition}</p>
          <p><b>Bat Side:</b> {player.batSide}</p>
          <p><b>Throw Side:</b> {player.throwSide}</p>
          <p><b>Birth City:</b> {city}</p>
        </div>
      </div>
    );
  }
}

export default Player;
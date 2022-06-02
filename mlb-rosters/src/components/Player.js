import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from 'react';

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
        'api-key': '0ca80ddc-63f6-476e-b548-e5fb0934fc4b'
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
    return(
      <div>
        <img src={player.picture} />
        <h1>#{player.number} {player.firstName} {player.lastName}</h1>
        <p>Position: {player.primaryPosition}</p>
        <p>Bat Side: {player.batSide}</p>
        <p>Throw Side: {player.throwSide}</p>
        <p>Birth City: {player.birthCity}, {player.birthStateProvince}, {player.birthCountry}</p>
      </div>
    );
  }
}

export default Player;
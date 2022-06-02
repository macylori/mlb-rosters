import React from "react";
import { BrowserRouter, Link, useParams } from 'react-router-dom';
import { root } from '../index';

export default function Players() {
  var params = useParams();
  var players = []

  var url = 'http://brew-roster-svc.us-e2.cloudhub.io/api/teams/' + params.id + '/players'
  
  fetch(url, {
    method: 'GET',
    headers: {
      'api-key': '0ca80ddc-63f6-476e-b548-e5fb0934fc4b'
    }
  }).then(response => response.json())
  .then(
    (result) => {
      root.render(<div>
      <h1 style={{ textAlign: 'center' }}>Team Roster</h1>
      <p>{players.length}</p>
      <div style={{ alignItems: 'center' }}>
      { result.map((player) => (
        <ul>
          <Link to={`/player/${ player.id }`}><li>{player.name}</li></Link>
        </ul>
      )) }
      </div>
      </div>)
    }
  )
}
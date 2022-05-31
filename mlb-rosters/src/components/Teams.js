import React from 'react';
import { Card } from 'react-bootstrap';

import '../App.css';

class Teams extends React.Component {
  render () {
    return(
      <div>
        <h1>MLB Teams</h1>
        <Card>
          <Card.Text>Milwaukee Brewers</Card.Text>
        </Card>
      </div>
    );
  }
}

export default Teams;
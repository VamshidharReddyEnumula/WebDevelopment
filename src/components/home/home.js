import React from 'react';
import './home.css';
import { Button } from 'reactstrap';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Button color="btn">Basic</Button>
  <Button color="primary">Primary</Button>
  <Button color="secondary">Secondary</Button>
  <Button color="success">Success</Button>
  <Button color="info">Info</Button>
  <Button color="warning">Warning</Button>
  <Button color="danger">Danger</Button>
  <Button color="dark">Dark</Button>
  <Button color="light">Light</Button>
  <Button color="link">Link</Button>      
      </div>
    );
  }
}

export default Home;

import React from 'react';

import client from './../lib/client'

export default class HelloWorld extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      name: 'Friend'
    };
  }

  componentDidMount() {
    client.get('currentUser').then(response => {
      this.setState({
        name: response.currentUser.name
      });
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Hello {this.state.name}</h1>
      </div>
    )
  }
}

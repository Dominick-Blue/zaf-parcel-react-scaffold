import React from 'react';

export default class HelloWorld extends React.Component { 
  render() {
  	return(
			<div className="container">
          <h1>Hello {this.props.name}</h1>
      </div>
  	)
  }
}
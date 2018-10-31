import React from 'react';
import Header from './Header';
import HelloWorld from './HelloWorld';

export default class App extends React.Component {
  render() {
    return (
    	<div>
        <Header/>
        <HelloWorld name="Friend" />
      </div>
    )
  }
}

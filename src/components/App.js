import React from 'react';
import Header from './Header';
import HelloWorld from './HelloWorld';

// var currentUserName = "friend";
// var currentUserName = getUserName();

var client = window.ZAFClient.init();
client.invoke('resize', { width: '100%', height: '200px' });
// var currentUserName = 

// function getUserName() {}
//   client.get('currentUser').then(function(data){
//     currentUserName = data.user;
//     return currentUserName;
// });


export default class App extends React.Component {
  render() {
    return (
    	<div>
        <Header/>
        <HelloWorld/>
      </div>
    )
  }
}

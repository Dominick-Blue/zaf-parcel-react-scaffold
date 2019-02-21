import React from 'react';
import '@zendeskgarden/react-buttons/dist/styles.css';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Button } from '@zendeskgarden/react-buttons';

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
    	<ThemeProvider>
        <div>
          <Header/>
          <HelloWorld/>
        </div>
      </ThemeProvider>
    )
  }
}

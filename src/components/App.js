import React from 'react';
import '@zendeskgarden/react-buttons/dist/styles.css';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Button } from '@zendeskgarden/react-buttons';

import Header from './Header';
import HelloWorld from './HelloWorld';

var client = window.ZAFClient.init();
client.invoke('resize', { width: '100%', height: '200px' });

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

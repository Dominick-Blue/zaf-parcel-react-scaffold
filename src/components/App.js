import React from 'react';
import { ThemeProvider } from '@zendeskgarden/react-theming';

import Header from './Header';
import HelloWorld from './HelloWorld';
import client from './../lib/client'

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

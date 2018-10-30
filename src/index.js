import React from "react";
import ReactDOM from "react-dom";
// import Header from './components/Header'
import App from './components/App';

import './scss/app.scss'

// class HelloMessage extends React.Component {
//   render() {
//     return (
//     	<div>
//         <App/>
//       </div>
//     )
//   }
// }

let app = document.getElementById("app");

ReactDOM.render(<App/>, app);
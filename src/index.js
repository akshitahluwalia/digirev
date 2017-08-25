import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Navbar.js';
import Cardin from './Card1.js';

 
injectTapEventPlugin();
const Main = () => (
  <MuiThemeProvider>
 <div> 
 	<Navbar/>
 	<App/>
 </div>

 <div>
 	<Cardin/>
 	<App/>
 </div>
 </MuiThemeProvider>
 );

ReactDOM.render(
	<Main />,
  document.getElementById('root')
);

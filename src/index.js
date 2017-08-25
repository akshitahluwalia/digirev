import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Navbar.js';
import Comm from './Comm.js';
import UserHistory from './UserHistory.js';
import Seekers from './Seekers.js';
import ApplyForm from './ApplyForm.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
 
injectTapEventPlugin();


const Main = () => (
  <MuiThemeProvider>
  
 <div>
 	<Navbar/>
 <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/comm" component={Comm} />
        <Route exact path="/history" component={UserHistory} />
        <Route exact path="/seekers" component={Seekers} />
        <Route exact path="/applyform" component={ApplyForm} />
        
      </div>
    </Router> 
 	
 </div>
 </MuiThemeProvider>
 );

ReactDOM.render(

	<Main />,
  document.getElementById('root')
);

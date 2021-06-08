import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About'
import Cardlist from './components/Cardlist';
import Pop from './imagepop'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar /> 
          <Switch>
            <Route exact path="/" component={Cardlist}/>
            <Route exact path='/about' component={About} />
            <Route exact path="/imagepop/:name" component={Pop}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default  App

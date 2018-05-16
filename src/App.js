import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header'
import Footer from './components/Footer'
import HideTheImage from './components/HideTheImage'
import {HomePage} from './components/HomePage'
import {About} from './components/About'
import {PPP} from './components/PPP'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  //possible way to link to div on page
  // <a name='education' />
  //#education


  // OR:
  // componentDidMount() {
  //     document.getElementById('my-div').scrollIntoView()
  // }
//   ```<div id='my-div'>
//     Hello world
// </div>```
  render() {
    return (
      <Router>

        <div class="App">


      <Route exact path="/" component={HomePage}/>
      <Route path="/about" component={About}/>
      <Route path="/education" component={About}/>
      <Route path="/contact" component={About}/>
      <Route path="/projects" component={PPP}/>
  </div>
  </Router>
    );
  }
}

export default App;

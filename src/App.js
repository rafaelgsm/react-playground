import React, { Component } from 'react';
import Navbar from './components/Navbar'

import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

import Post from './components/Post'

class App extends Component {


  render() {
    return (

      //Wrapping the app with the BrowserRouter:
      <BrowserRouter>

        <div className="App" >

          <Navbar />

          {/* The Route component shows the Component based on the path you specified */}

          {/* We use "exact" so React wont load HOME+ABOUT or HOME+CONTACT. */}
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />

          {/* Route parameter: */}
          <Route path='/:post_id' component={Post} />

        </div>

      </BrowserRouter>
    )
  }

}

export default App;

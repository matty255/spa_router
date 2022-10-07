import { useState } from 'react'
import './App.css'
import Router from './router/Router'
import Route from './router/Route';
import About from './page/About'
import Main from './page/Main'

const App =() => {
  window.onpopstate = function(event) {
    history.back(); 
}
  return (
    <div className="App">
    <Router>
      <Route path="/" component={<Main />} />
      <Route path="/about" component={<About />} />
    </Router>
    </div>
  )
}

export default App

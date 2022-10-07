import { useState } from 'react'
import '../App.css'

function About() {
    const b = () => {
        history.pushState(null,"", '/');
      }

    return (
        <div className="App">
          
          <div className="card">
            <button onClick={b}>
              메인으로
            </button>

        </div>
        </div>
      )
}

export default About
import { useState } from 'react'
import '../App.css'

function Main() {
      const c = () => {
        history.pushState(null,"", '/about');
      }
    return (
        <div className="App">
          
          <div className="card">

            <button onClick={c}>
              어바웃
            </button>
        </div>
        </div>
      )
}

export default Main
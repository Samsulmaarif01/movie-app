import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
       <div className='pattern'/>

       <div className='wrapper'>
          <header>
            <img src='./hero.png' alt='hero banner'/>
            <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy The Hassle</h1>
            <p className=''>Search</p>
          </header>
       </div>
    </main>
  )
}

export default App

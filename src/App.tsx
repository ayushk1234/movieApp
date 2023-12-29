// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {NavBar} from './components/navBar.tsx'
//  components\navBar.tsx

function App() {
  // const [count, setCount] = useState(0)s

  return (
    <div>
      {/* <h1 >hi</h1>/ */}
      
      
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<h1>Homw</h1>}/>
          <Route path="/auth" element={<h1>auhtr</h1>}/>
          <Route path="/rated" element={<h1>Homw</h1>}/>

          </Routes>

        </Router>

    </div>
  )
}

export default App

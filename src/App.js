import react from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'
import PhotoSection from './components/PhotoSection';
import Navbar from './components/Navbar'
import Bar from './components/Bar'
import Homepage from './components/HomePage';


function App() {
  return (
    <>
    
     <Router>
       <Homepage></Homepage>
     </Router>
    
    
    </>
  )
}

export default App;

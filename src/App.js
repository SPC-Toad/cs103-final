import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.js'
import Credit from './components/Credit/Credit.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/credit' element={<Credit />}/>
      </Routes>
    </Router>
  );
}

export default App;

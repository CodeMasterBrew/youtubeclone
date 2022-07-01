import './App.css';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PlayVideo from './components/PlayVideo';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/playvideo" element={<PlayVideo/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

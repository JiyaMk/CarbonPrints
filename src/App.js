import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register  from './Components/Register/Register';
import Login from './Components/Login/Login';
import { Home } from './Components/Home/Home';
import Calculator from './Components/Calculator/Calculator';
import Insights from './Components/Insights/Insights';
import Landing from './Components/Landing/Landing';
import { Dashboard } from './Components/Dashboard/Dashboard';
import LeaderboardPage from './Components/Leaderboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/insights" element ={<Insights/>}/>
        <Route path="/dashboard" element ={<Dashboard/>}/>
        <Route path="/Leaderboard" element ={<LeaderboardPage/>}/>
        
      </Routes>
    </Router>
    
    

  );
}

export default App;

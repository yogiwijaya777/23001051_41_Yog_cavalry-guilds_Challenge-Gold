import './App.css';
import TopDecks from './routes/TopDecks';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/topdecks" element={<TopDecks />} />
      </Routes>
    </Router>
  );
}

export default App;

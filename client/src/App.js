import './App.css';
import NotFound from './components/NotFound';
import TopDecks from './routes/TopDecks';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/topdecks" element={<TopDecks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

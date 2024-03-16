import './App.css';
import NotFound from './routes/NotFound';
import TopDecks from './routes/TopDecks';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1 className="text-center text-light">Hello World</h1>} />
        <Route path="/top-decks" element={<TopDecks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

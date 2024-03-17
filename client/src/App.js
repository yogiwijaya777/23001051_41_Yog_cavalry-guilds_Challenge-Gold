import './App.css';
import Login from './routes/Login';
import Deck from './routes/Deck';
import NotFound from './routes/NotFound';
import TopDecks from './routes/TopDecks';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<h1 className="text-center text-light">Hello World</h1>} />
          <Route path="login" element={<Login />} />
          <Route path="/top-decks" element={<TopDecks />} />
          <Route path="/decks/:id" element={<Deck />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

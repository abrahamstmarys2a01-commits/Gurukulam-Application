import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Apply from './pages/Apply';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Apply />} />
      </Routes>
    </Router>
  );
}

export default App;

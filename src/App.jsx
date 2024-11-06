// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Error from './pages/Error';
import Footer from './components/layout/Footer';


function App() {
  
  return (
    <Router>

      <div className="App bg-neutral-900 min-h-full overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register/>} />
          <Route path="*" element={<Error/>} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

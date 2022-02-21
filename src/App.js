
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Calculator from "./pages/calc";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calculator />} />
      </Routes>
    </Router>
  );
}

export default App;

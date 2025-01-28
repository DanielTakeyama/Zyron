import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/login/login";
import Dashboard from "./components/pages/dashboard/dashboard";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cardpage from "./pages/Cardpage";
import Home from "./pages/Home";
import "./style/main.css"


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card/:id" element={<Cardpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

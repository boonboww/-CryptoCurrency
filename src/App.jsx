import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainRoute from "./routes/MainRoute";
import Currency from "./routes/Currency";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainRoute />} />
          <Route path="/currency/:id" element={<Currency />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinglePage from "./pages/SinglePage/SinglePage";
import Movies from "./pages/Movies/Movies";
import Search from "./pages/Search/Search";
import Series from "./pages/Series/Series";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/search" element={<Search />} />
          <Route path="items/:id" element={<SinglePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

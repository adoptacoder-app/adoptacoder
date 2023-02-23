import { Route, Routes } from "react-router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detailsProfile/:id" element={<CoderProfile />} />
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home/Home.jsx"
import CoderProfile from "./Components/mol-coderProfile/mol-coderProfile.jsx"


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/detailsProfile/:id" element={<CoderProfile />} />
      </Routes>
  );
}

export default App;

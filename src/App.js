import { Route, Routes } from "react-router";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import CoderProfile from "./Components/mol-coderProfile/mol-coderProfile";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/detailsProfile/:id" element={<CoderProfile />} />
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;

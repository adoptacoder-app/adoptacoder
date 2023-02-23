import { Route, Routes } from "react-router";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home'
import CoderProfile from "./Pages/ProfileCoder/mol-coderProfile";
import FormUser from './Pages/Form/FormUser'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/detailsProfile/:id" element={<CoderProfile />} />
        <Route path="/formUser" element={<FormUser/>}/>
      </Routes>
    </>
  );
}

export default App;

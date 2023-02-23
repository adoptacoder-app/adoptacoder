import { Route, Routes } from "react-router";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Pages/Contact/Contact'
import CoderProfile from "./Pages/ProfileCoder/mol-coderProfile";
import Home from "./Pages/Home/Home";
import FormEmpresa from "./Pages/FormEmpresa/FormEmpresa";
import FormUser from './Pages/FormUser/FormUser'



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailsProfile/:id" element={<CoderProfile />} />
        <Route path="/Contact/:id" element={<Contact/>}/>
        <Route path="/formUser" element={<FormUser />} />
        <Route path="/formEmpresa" element={<FormEmpresa/>}/>
        <Route path="*" element={<h1>Error 404</h1>}/>
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import CoderProfile from "./Components/mol-coderProfile/mol-coderProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailsProfile/:id" element={<CoderProfile />} />
        <Route path="/formUser" element={<FormUser />} />
        <Route path="" element={""} />
        <Route path="" element={""} />
        <Route path="" element={""} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </>
  );
}

export default App;

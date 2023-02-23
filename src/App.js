import { Route, Routes } from "react-router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import CoderSnippet from "./assets/atom-coderSnippet/atom-coderSnippet";
//import CodersList from "./assets/mol-codersList/mol-codersList";
import CoderProfile from "./assets/mol-coderProfile/mol-coderProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={""} />
        <Route path="/details/:id" element={<CoderProfile />} />
      </Routes>
    </>
  );
}

export default App;

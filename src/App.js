// import { Route, Routes } from "react-router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CoderSnippet from "./assets/mol-coderSnippet/mol-coderSnippet";
import CodersList from "./assets/mol-codersList/mol-codersList";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={''}/>
    // </Routes>
    <>
      <CoderSnippet
        img="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/983.jpg"
        firstName={"Carson"}
        lastName={"Thompson"}
        area={"Backend Developer"}
        experience={"Junior dev"}
      />
    </>
  );
}

export default App;

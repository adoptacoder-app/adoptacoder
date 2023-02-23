// import { Route, Routes } from "react-router";
import "./App.css"
import AtomNavbar from "./Components/atom-navbar/AtomNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
// import GenericCard from "./assets/atom-card/atom-card";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";


function App() {
  return (
    <>
    <AtomNavbar/>
    </>
    /*<Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>*/
    // <GenericCard name="Carlos" bio="Some quick example text to build on the card title and make up the
    // bulk of the card's content."/>
  );
}



export default App;

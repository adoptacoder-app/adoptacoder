// import { Route, Routes } from "react-router";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import GenericCard from "./assets/atom-card/atom-card";
import OutlinedButton from "./assets/atom-outlinedButton/atom-outlinedButton";



function App() {
  return (
    // <Routes>
    //   <Route path="/" element={''}/>
    // </Routes>
    <div>
    <GenericCard name="Carlos" bio="Some quick example text to build on the card title and make up the
    bulk of the card's content."/>
    <OutlinedButton/>
    </div>
  );
}

export default App;

// import { Route, Routes } from "react-router";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import GenericDropdown from "./assets/atom-dropdown/atom-dropdown";


function App() {
  return (
    // <Routes>
    //   <Route path="/" element={''}/>
    // </Routes>
    <GenericDropdown title="Tu experiencia" option1="Junior" option2="Mid" option3="Senior"/>
  );
}

export default App;

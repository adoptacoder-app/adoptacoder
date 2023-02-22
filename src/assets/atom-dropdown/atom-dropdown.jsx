import React from "react"
import Dropdown from 'react-bootstrap/Dropdown';
import "./atom-dropdown.css"

function GenericDropdown({title, option1, option2, option3}) {
 return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdownMenu">
        <Dropdown.Item className="item" href="#/action-1"> {option1} </Dropdown.Item>
        <Dropdown.Item className="item" href="#/action-2"> {option2} </Dropdown.Item>
        <Dropdown.Item className="item" href="#/action-3"> {option3} </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
} 

export default GenericDropdown;


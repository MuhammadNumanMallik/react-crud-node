
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';





function Header( { }) {
  const navigate = useNavigate();
  const [usersData, setUserData] = useState('');

  const handleLogout = () => {
    localStorage.removeItem("user-data");
    navigate("/");
  };
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user-data"));
    if (userData) {
      setUserData(userData);
    } else {
        navigate("/");      
    }
  }, []);



  return (
 <>
   
        <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
         
          paddingRight:'5px',
          paddingLeft:'5px',
          backgroundColor:'#F1F1F1',
      
        }}
      >
        
        <div className="btn-group ms-auto">
        <h5 style={{ fontSize: "14px", marginTop: "10px" }}>
          {moment().format("DD/MM/YYYY")
}
        </h5>
        <Dropdown>
          <Dropdown.Toggle variant="transparent" id="dropdown-basic">
            <FontAwesomeIcon icon={faEllipsisV} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>{usersData.name && usersData.name}</Dropdown.Item>
            <Dropdown.Item onClick={() => handleLogout()}>LogOut</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
    </header>
 </>
  );
}

export default Header;


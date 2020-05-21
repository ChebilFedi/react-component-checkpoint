import React from "react";
import Address from "./profile/Address";
import FullName from "./profile/FullName";
import ProfilPhoto from "./profile/ProfilPhoto";
import "./Main.css";

const Main = () => {
  return (
    <div className="Main">
      
        <ProfilPhoto />
      
      <div className="info">
        
        <FullName />
        <Address />
       
      </div>
     
    </div>
  );
};
export default Main;

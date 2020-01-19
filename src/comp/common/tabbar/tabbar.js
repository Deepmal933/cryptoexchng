import React from "react";
import "./tabbar.css";
const Tabbar = props => {
  return (
    <div className="card tabbar">
      <div className="tabs">
        {
          props.options.map((option,index)=>
            <li className={index===props.selected?"active":""} onClick={()=>{props.onchange(index)}}>{option}</li>     
            )}
     
      </div>
    </div>
  );
};

export default Tabbar;

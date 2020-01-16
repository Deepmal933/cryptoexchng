import React from "react";
import "./account.css";
import Tabbar from "../../../common/tabbar/tabbar";
const Account = props => {
  return (
    <React.Fragment>
      <div className="wrapper account">
       <h1>Account</h1>
       <Tabbar options={["Account","Security","Identification","Notification","API"]} selected={0}/>
        <div className="card level">
            <div className="left">
dnsksnkdsn
            </div>
            <div className="right">
dsnkdsdsnskd
            </div>
        </div>
        <div className="card">
          <div className="card-table">
            <table>
              <tr className="header">
                <th></th>
                <th>PAIR</th>
                <th>COIN</th>
                <th>LAST PRICE</th>
                <th>HIGH 24H</th>
                <th>LOW 24H</th>
                <th>AVG 24H</th>
                <th>CHANGE%</th>
                <th>VOLUMN</th>
              </tr>
             
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Account;

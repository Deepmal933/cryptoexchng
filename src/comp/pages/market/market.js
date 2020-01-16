import React from "react";
import "./market.css";
import Tabbar from "../../common/tabbar/tabbar";
import market_data from "../../../data/market_data";
const Market = props => {
  return (
    <React.Fragment>
      <div className="wrapper market">
        <div className="card">
          <div className="search">
            <input type="text" placeholder="Search coin" />
          </div>
        </div>
        <Tabbar options={["Favorite","Btc Market","TRY Market","ALT Market"]} selected={1}/>
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
              {market_data.map(data => (
                <tr>
                  <td></td>
                  <td>{data.pair}</td>
                  <td>{data.coin}</td>
                  <td>{data.last}</td>
                  <td>{data.high}</td>
                  <td>{data.low}</td>
                  <td>{data.avg}</td>
                  <td>{data.change}%</td>
                  <td>{data.vol}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Market;

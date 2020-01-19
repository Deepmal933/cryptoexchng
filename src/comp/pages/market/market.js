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
            <span className="search-icon flex-center">
            <i class="fas fa-search"></i>
            </span>
            <input type="text" placeholder="Search coin" />
          </div>
        </div>
        <Tabbar options={["Favorite","Btc Market","TRY Market","ALT Market"]} selected={1}/>
        <div className="card market-table">
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
              {market_data.map((data,index) => (
                <tr>
                  <td><span className="star-icon flex-center"><i class="fas fa-star"></i></span></td>
                  <td>{data.pair}</td>
                  <td>{data.coin}</td>
                  <td>{data.last}</td>
                  <td>{data.high}</td>
                  <td>{data.low}</td>
                  <td>{data.avg}</td>
              <td className={index%2 ===0 ? "up":"down"}>{index%2 === 0 ? <i class="fas fa-arrow-up"></i> : <i class="fas fa-arrow-down"></i> }&nbsp;{data.change}%</td>
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

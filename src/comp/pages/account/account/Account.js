import React from "react";
import "./account.css";
import Tabbar from "../../../common/tabbar/tabbar";
import { order_data, recent_activity } from '../../../../data/account_data';
const Account = props => {
  return (
    <React.Fragment>
      <div className="wrapper account">
        <h1>Account</h1>
        <Tabbar
          options={[
            "Account",
            "Security",
            "Identification",
            "Notification",
            "API"
          ]}
          selected={0}
        />
        <div className="card">
          <div className="card-content">
            <div className="level">
              <div className="level-left ver">
                <div className="profile">
                  <div className="subtitle is-4">John doe</div>
                  <div className="subtext">johndoe@gmail.com</div>
                  <br />
                  <a className="btn-link">EDIT PROFILE</a>
                </div>
              </div>
              <div className="level-right ver">
                <div className="subtext">Estimated Balance</div>
                <div className="subtitle is-5">
                  0.73778900 BTC <span className="subtext">~ 43,456 TRY</span>
                </div>
                <br />
                <div>
                  <button className="btn-line green">Deposit</button>&nbsp;
                  <button className="btn-line red">Withdraw</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col is-x">
          <div className="subheading wsp">Open Order</div>
            <div className="card">
              <div className="card-table">
                <table>
                  <tr className="header">
                    <th>PAIR/DATE</th>
                    <th>TYPE</th>
                    <th>PRICE/AMOUNT</th>
                    <th>TOTAL/FILLED</th>
                    <th>ACTION</th>
                  </tr>
                  {order_data.map(data =>
                    <tr>
                      <td>
                        <div className="subtitle is-6">{data.pair}</div>
                        <div className="subtext">{data.date}</div>
                      </td>
                      <td>
                        <div className="subtitle is-6">{data.type}</div>
                        <div className="subtext">{data.type_amount}</div>
                      </td>
                      <td>
                        <div className="subtitle is-6">{data.price}</div>
                        <div className="subtext">{data.amount}</div>
                      </td>
                      <td>
                        <div className="subtitle is-6">{data.total}</div>
                        <div className="subtext">{data.filled}</div>
                      </td>
                      <td>
                        <button className="btn-line red">CANCEL</button>
                      </td>
                    </tr>
                  )}


                </table>
              </div>
            </div>
              <div className="text-right">
                <a>View All</a>
                </div>            
            <div className="subheading wsp">Recent Activity</div>
            <div className="card">
              <div className="card-table">
                <table>
                  <tr className="header">
                    <th>Timestamp</th>
                    <th>Device</th>
                    <th>IP Address</th>
                  </tr>
                  {recent_activity.map(data =>
                    <tr>
                      <td>{data.timestamp}</td>
                      <td>{data.device}</td>
                      <td>{data.ip}</td>
                    </tr>
                  )}
                </table>
              </div>
            </div>
            <div className="text-right">
                <a>View All</a>
                </div>  
          </div>

          <div className="col is-350">
            <div className="card">
              <div className="card-content">
                <div className="level">
                  <div className="level-left">
                    <div className="row middle">
                      <img
                        src="./img/security_light.png"
                        className="icon"
                      ></img>
                      &nbsp;
                      <div>
                        <div className="subtitle is-5">Security</div>
                        <div className="subtext">Medium</div>
                      </div>
                    </div>
                  </div>
                  <div className="level-right">
                    <a className="btn-link">EDIT PROFILE</a>
                  </div>
                </div>
                <br />
                <div className="progress-bar">
                  <span className="progress is-30 yellow"></span>
                </div>
              </div>
            </div>
            <div className="card exchange-fees">
              <div className="card-content">
                <div className="subtitle is-5">Exchange Fees</div>
                <br />
                <div className="level">
                  <div className="level-left ver">
                    <div className="subtitle is-5">26%</div>
                    <div className="subtext">Current Fees</div>
                  </div>
                  <div className="level-progress">
                    <div className="progress-bar">
                      <span className="progress is-30 green"></span>
                    </div>
                    <div className="subtext">0.8 / 1 BTC</div>
                  </div>
                  <div className="level-right ver">
                    <div className="subtitle is-5">0.26%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="subtitle is-5">Announcements</div>
                <div className="info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</div>
                <div className="info">Lorem Ipsum is simply dummy text of the printing and typesetting the 1500s, when an unknown printer</div>
              </div>
            </div>
            <div className="text-right">
                <a>View All</a>
                </div>  
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Account;

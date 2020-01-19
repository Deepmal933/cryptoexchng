import React from "react";
import "./notification.css";

const Notification = props => {
  return (
    <React.Fragment>
      <div className="notification">
       
       <div className="card options notification">
           <div className="card-content">
           <div className="level middle">
                  <div className="level-left ver">
                    <div className="row middle">
                      <img
                        src="./img/not_light.png"
                        className="icon"
                      ></img>
                      &nbsp;
                      <div>
                        <div className="subtitle is-5">Recieve an occational Newsletter</div>
                        <div className="subtext">We’ll only send it out when it’s smothing super great!!</div>
                      </div>
                    </div>
                  </div>
                  <div className="level-right ver">
                  <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
              </label>
                  </div>
                </div>
           </div>
       </div>
<br/>
        <div className="subheading">Other Security Options</div>
        <div className="card options">
            <div className="card-content">
            <div className="level middle">
                  <div className="level-left ver">
                    <div className="row middle">
                      <img
                        src="./img/loginnot_light.png"
                        className="icon"
                      ></img>
                      &nbsp;
                      <div>
                        <div className="subtitle is-5">Login Notification</div>
                        <div className="subtext">Notifiy when someone login into your Account</div>
                      </div>
                    </div>
                  </div>
                  <div className="level-right ver">
                  <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
              </label>
                  </div>
                </div>
            </div>
            <div className="card-content">
            <div className="level middle">
                  <div className="level-left ver">
                    <div className="row middle">
                      <img
                        src="./img/financenot_light.png"
                        className="icon"
                      ></img>
                      &nbsp;
                      <div>
                        <div className="subtitle is-5">Financial Notification</div>
                        <div className="subtext">Deposit / Withdrawal</div>
                      </div>
                    </div>
                  </div>
                  <div className="level-right ver">
                  <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
              </label>
                  </div>
                </div>
            </div>
            <div className="card-content">
            <div className="level middle">
                  <div className="level-left ver">
                    <div className="row middle">
                      <img
                        src="./img/marketnot_light.png"
                        className="icon"
                      ></img>
                      &nbsp;
                      <div>
                        <div className="subtitle is-5">Market Notification</div>
                        <div className="subtext">Sell / buy / stop orders
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="level-right ver">
                  <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
              </label>
                  </div>
                </div>
            </div>
        </div>
        </div>
    </React.Fragment>
  );
};

export default Notification;

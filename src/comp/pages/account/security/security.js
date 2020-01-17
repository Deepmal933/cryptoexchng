import React from "react";
import "./security.css";
import Tabbar from "../../../common/tabbar/tabbar";

const Security = props => {
  return (
    <React.Fragment>
      <div className="wrapper security">
        <h1>Account</h1>
        <Tabbar
          options={[
            "Account",
            "Security",
            "Identification",
            "Notification",
            "API"
          ]}
          selected={1}
        />
        <div className="card">
          <div className="card-content">
            <div className="level middle">
              <div className="level-left ver">
                <div className="row middle">
                  <img src="./img/security_light.png" className="icon"></img>
                  &nbsp;
                  <div>
                    <div className="subtitle is-5">Security</div>
                    <div className="subtext">Medium</div>
                  </div>
                </div>
              </div>
              <div className="level-right ver">
                <div className="progress-bar" style={{ width: 300 + "px" }}>
                  <div className="progress is-30 yellow"></div>
                </div>
              </div>
            </div>
          </div>
          </div>
        <div className="subheading wsp">Enable 2FA Authentication</div>

        <div className="card auth">
          <div className="row">
            <div className="col is-3">
              <div className="card-content">
              <div className="level middle">
                  <div className="level-left ver">
                    <div className="row middle">
                      <img
                        src="./img/googleauth_light.png"
                        className="icon"
                      ></img>
                      &nbsp;
                      <div>
                        <div className="subtitle is-5">Google Authentication</div>
                        <div className="subtext">Enable</div>
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
            <div className="col is-3">
              <div className="card-content">
              <div className="level middle">
                  <div className="level-left ver">
                    <div className="row middle">
                      <img
                        src="./img/smsauth_light.png"
                        className="icon"
                      ></img>
                      &nbsp;
                      <div>
                        <div className="subtitle is-5">SMS Auth</div>
                        <div className="subtext">Enable</div>
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
            <div className="col is-3">
              <div className="card-content">
              <div className="level middle">
                  <div className="level-left ver">
                    <div className="row middle">
                      <img
                        src="./img/yubiauth_light.png"
                        className="icon"
                      ></img>
                      &nbsp;
                      <div>
                        <div className="subtitle is-5">Yubi key Authentication</div>
                        <div className="subtext">Enable</div>
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
        </div>
        <br/>
        <div className="subheading">Other Security Options</div>
        <div className="card options">
            <div className="card-content">
            <div className="level middle">
                  <div className="level-left ver">
                    <div className="row middle">
                      <img
                        src="./img/chngpass_light.png"
                        className="icon"
                      ></img>
                      &nbsp;
                      <div>
                        <div className="subtitle is-5">Change Password</div>
                        <div className="subtext">Used for Login</div>
                      </div>
                    </div>
                  </div>
                  <div className="level-right ver">
                  <button className="btn-line red">
                      Change
                  </button>
                  </div>
                </div>
            </div>
            <div className="card-content">
            <div className="level middle">
                  <div className="level-left ver">
                    <div className="row middle">
                      <img
                        src="./img/antiphis_light.png"
                        className="icon"
                      ></img>
                      &nbsp;
                      <div>
                        <div className="subtitle is-5">Anti phising Code</div>
                        <div className="subtext">You’ll be able to tell your notification email will coming from Naskara or phishing</div>
                      </div>
                    </div>
                  </div>
                  <div className="level-right ver">
                  <button className="btn-line red">
                      Create
                  </button>
                  </div>
                </div>
            </div>
            <div className="card-content">
            <div className="level middle">
                  <div className="level-left ver">
                    <div className="row middle">
                      <img
                        src="./img/withdrawlist_light.png"
                        className="icon"
                      ></img>
                      &nbsp;
                      <div>
                        <div className="subtitle is-5">Withdrawal whitelist</div>
                        <div className="subtext">Your Withdrawal list
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="level-right hor center">
                  <div className="subtext">Only White list  </div><label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
              </label>
                  <button className="btn-line green">
                      Manage
                  </button>
                  </div>
                </div>
            </div>
            <div className="card-content">
            <div className="level middle">
                  <div className="level-left ver">
                    <div className="row middle">
                      <img
                        src="./img/devicemng_light.png"
                        className="icon"
                      ></img>
                      &nbsp;
                      <div>
                        <div className="subtitle is-5">Device Management</div>
                        <div className="subtext">Your authorized device</div>
                      </div>
                    </div>
                  </div>
                  <div className="level-right ver">
                  <button className="btn-line green">
                      Manage
                  </button>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Security;

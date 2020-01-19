import React, { useState } from "react";
import "./security.css";
import DeviceMng from "./devicemng/devicemng";
import ChangePass from "../../../dialogs/changepass/changepass";
import GoogleAuth from "../../../dialogs/googleauth/googleauth";
import SMSAuth from "../../../dialogs/smsauth/smsauth";
import AntiPhising from "../../../dialogs/antiphishing/antiphising";

const Security = props => {

const [dm,setDM] = useState(false);
const [googled,setGoogleD] = useState(false);
const [smsd,setSmsD] = useState(false);
const [antid,setAntiD] = useState(false);
const [passd,setPassD] = useState(false);
const handleBack = () =>{
  setDM(false);
}

  return (
    <React.Fragment>
      {passd && <ChangePass onclose={()=>{setPassD(false)}}/> }
      {googled && <GoogleAuth onclose={()=>{setGoogleD(false)}}/> }
      {smsd && <SMSAuth onclose={()=>{setSmsD(false)}}/>}
      {antid && <AntiPhising onclose={()=>{setAntiD(false)}}/>}

      {!dm && <div className="security">
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
  <input type="checkbox" onChange={()=>{setGoogleD(true)}}/>
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
  <input type="checkbox" onChange={()=>{setSmsD(true)}}/>
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
                  <button className="btn-line red" onClick={()=>{setPassD(true)}}>
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
                  <button className="btn-line red" onClick={()=>{setAntiD(true)}}>
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
                  <button className="btn-line green" onClick={()=>{setDM(true)}}>
                      Manage
                  </button>
                  </div>
                </div>
            </div>
        </div>
        </div>}
        {dm&&<DeviceMng onback={handleBack}/>}
    </React.Fragment>
  );
};

export default Security;

import React from "react";
import "./identification.css";
import StepBar from '../../../common/stepbar/stepbar'
import Steps from "./steps/steps";
const Identification = props => {
  return (
    <React.Fragment>
      <div className="identification">
      <div className="card">
           <div className="card-content">
           <div className="level middle">
                  <div className="level-left hor">
                    <div className="row middle">
                      <img
                        src="./img/accountstatus_light.png"
                        className="icon"
                      ></img>
                      &nbsp;
                      <div className="level-left hor">
                        <div className="subtitle is-5">Account Status</div><span className="label-red">Not verified</span>
                      </div>
                    </div>
                  </div>
                
                </div>
           </div>
       </div>
       <div className="row verify-notes">
           <div className="col is-3">
               <div className="level">
                   <div className="level-left hor">
                       <span class="number">1</span>
                       <div>
                       <div className="subtitle is-5">Proof of Identity</div>
                  <div className="subtext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </div>
                  </div>
                       
                   </div>
               </div>
           </div>
           <div className="col is-3" style={{background:'url(./img/frame.png)'}}>
           <div className="level">
                   <div className="level-left hor">
                       <span class="number">2</span>
                       <div>
                       <div className="subtitle is-5">Selfie with Proof</div>
                  <div className="subtext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </div>
                  </div>
                       
                   </div>
               </div>           </div>
           <div className="col is-3">
           <div className="level">
                   <div className="level-left hor">
                       <span class="number">3</span>
                       <div>
                       <div className="subtitle is-5">Proof of Address</div>
                  <div className="subtext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </div>
                  </div>
                       
                   </div>
               </div>           </div>
       </div>
       <div className="iden">
           <Steps/>
       </div>
       </div>
    </React.Fragment>
  );
};

export default Identification;

import React from "react";
import "./devicemng.css";
import device_mng_data from '../../../../../data/devicemng_data'

const DeviceMng = props => {
  return (
    <React.Fragment>
     <div className="devicemng">
         <div className="subheader">
             <span className="subheader-icon flex-center" onClick={()=>{props.onback()}}><i class="fas fa-chevron-left"></i></span>
         <div className="subheader-title">
         <div className="subtitle is-4">Device Managment</div>
         <div className="subtext">Your Linked Devices</div>
         </div>
         </div>
         <div className="card">
              <div className="card-table">
                <table>
                  <tr className="header">
                    <th>Device</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>IP Address</th>
                    <th>Action</th>
                  </tr>
                  {device_mng_data.map(data =>
                    <tr>
                      <td>{data.device}</td>
                      <td>{data.location}</td>
                      <td>{data.date}</td>
                      <td>{data.ip}</td>
                      <td><button className="btn-line red">Remove</button></td>
                    </tr>
                  )}
                </table>
              </div>
            </div>
     </div>
    </React.Fragment>
  );
};

export default DeviceMng;

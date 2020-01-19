import React,{useState} from "react";
import "./api.css";
import apikey_data from "../../../../data/apikey_data";
import ApiKey from '../../../dialogs/apikey/apikey'

const Api = props => {
  const [apidialog,setApiDialog] = useState(false);

  return (
    <React.Fragment>
      {apidialog && <ApiKey onclose={()=>{setApiDialog(false)}}/>}

      <div className="api">
        <div className="subheading wsp">Create an API </div>

        <div className="row">
          <div className="col is-2">
            <div className="card">
              <div className="card-content">
                <label>API Key lable</label>
                <div className="input-text">
                  <input type="text" placeholder="lable" />
                </div>
                <br />
                <label>API Key lable</label>
                <div className="input-textarea">
                  <textarea type="text" placeholder="lable" />
                </div>
                <br />
                <div className="level middle">
                  <div className="level-left">
                    <label class="input-check">
                      Read Info
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="input-check">
                      Trade
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="input-check">
                      Withdraw
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div className="level-right">
                    <button className="btn-primary" onClick={()=>{setApiDialog(true)}}>Generate</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col is-2">
            <div className="card">
              <div className="card-content">
                <div className="subtitle is-5">Notes</div>
                <div className="info">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer
                </div>
                <div className="info">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting the 1500s, when an unknown printer
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subheading wsp">My Api Keys</div>

        <div className="card">
          <div className="card-table">
            <table>
              <tr className="header">
                <th>CREATE DATE</th>
                <th>LABEL</th>
                <th>PERMISSION</th>
                <th>ACCESS KEY</th>
                <th>BINDED API</th>
                <th>ACTION</th>
              </tr>
              {apikey_data.map(data => (
                <tr>
                  <td>{data.date}</td>
                  <td>{data.label}</td>
                  <td>{data.permission}</td>
                  <td>{data.access_key}</td>
                  <td>{data.ip}</td>
                  <td>
                    <button className="btn-line red">CANCEL</button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
        <div className="text-left">
                <a>For More info read our API Documentation</a>
                </div>  
      </div>
    </React.Fragment>
  );
};

export default Api;

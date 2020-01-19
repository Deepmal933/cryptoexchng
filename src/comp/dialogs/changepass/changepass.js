import React from 'react'
import './changepass.css'

const ChangePass = props =>{


    return <div className="dialog-back flex-center change-pass-dialog">
        <div className="dialog">
            <div className="dialog-header">
<div className="level middle">
    <div className="level-left">
        <div className="subtitle is-5">Change Login Password</div>
    </div>
    <div className="level-right">
        <span className="close-icon flex-center" onClick={()=>{props.onclose()}}>
        <i class="fas fa-times"></i>
        </span>

    </div>
</div>
            </div>
            <div className="dialog-content">
                <div className="info-yellow">
                    <div className="level">
                        <div className="level-left">
                        <i class="fas fa-info-circle"></i>
                        </div>
                        <div className="subtext">For security reson not withdrawal will bew permitted after changeing the password.</div>
                    </div>
                </div>
                <br/>
              
                <div className="input-text">
                  <input type="text" placeholder="Old Password" />
                </div>
                
                <div className="input-text">
                  <input type="text" placeholder="New Password" />
                </div>
                <div className="input-text">
                  <input type="text" placeholder="Confirm New Password" />
                </div>

                <div class="text-right">
                    <button class="btn-primary">Save</button>
                </div>
                
            </div>
        </div>
    </div>
}

export default ChangePass;
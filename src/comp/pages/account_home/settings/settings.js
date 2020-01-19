import React from 'react'
import './settings.css'

const Settings  = props =>{
    return <React.Fragment>
<div className="settings">
    <div className="card options">
        <div className="card-content">
            <div className="level middle">
                <div className="level-left middle">
                    <span className="setting-icon">
                    <i class="far fa-user"></i>
                    </span>
                    <div className="subheading">Name</div>
                </div>
                <div className="level-right">
                    John doe
                </div>
            </div>
        </div>
        <div className="card-content">
            <div className="level middle">
                <div className="level-left middle">
                    <span className="setting-icon">
                    <i class="far fa-calendar-alt"></i>
                                        </span>
                    <div className="subheading">Birthdate</div>
                </div>
                <div className="level-right">
                    12/1/1993
                </div>
            </div>
        </div>
        <div className="card-content">
            <div className="level middle">
                <div className="level-left middle">
                    <span className="setting-icon">
                    <i class="far fa-envelope"></i>
                                        </span>
                    <div className="subheading">Email Addres</div>
                </div>
                <div className="level-right">
                    johndoe@gmail.com &nbsp; <i class="fas fa-check-circle blue-icon"></i> 
                </div>
            </div>
        </div>
        <div className="card-content">
            <div className="level middle">
                <div className="level-left middle">
                    <span className="setting-icon">
                    <i class="fas fa-phone-alt"></i>
                                                            </span>
                    <div className="subheading">Phone number</div>
                </div>
                <div className="level-right middle">
                    +14383897483&nbsp; <i class="fas fa-check-circle blue-icon"></i> <span className="edit-icon flex-center"><i class="fas fa-pen"></i></span>
                </div>
            </div>
        </div>
        <div className="card-content">
            <div className="level middle">
                <div className="level-left middle">
                    <span className="setting-icon">
                    <i class="fas fa-user-check"></i>
                                                            </span>
                    <div className="subheading">User Verified</div>
                </div>
                <div className="level-right middle">
                <i class="fas fa-check-circle blue-icon"></i>&nbsp;<span style={{color:'#0063FF'}}>Verified</span><span className="edit-icon flex-center"><i class="fas fa-pen"></i></span>
                </div>
            </div>
        </div>
        <div className="card-content">
            <div className="level middle">
                <div className="level-left middle">
                    <span className="setting-icon">
                    <i class="fas fa-language"></i>
                                                            </span>
                    <div className="subheading">Language</div>
                </div>
                <div className="level-right">
                <select class="input-select" style={{width:150+"px"}}>
                                <option>English</option>
                                <option>Turkish</option>
                                <option>Chinese</option>
                                <option>French</option>
                            </select>
                </div>
            </div>
        </div>
        <div className="card-content">
            <div className="level middle">
                <div className="level-left middle">
                    <span className="setting-icon">
                    <i class="far fa-clock"></i>
                                                            </span>
                    <div className="subheading">Timezone</div>
                </div>
                <div className="level-right">
                <select class="input-select" style={{width:150+"px"}}>
                                <option>Pacific</option>
                                <option>Turkish</option>
                                <option>Chinese</option>
                                <option>French</option>
                            </select>                </div>
            </div>
        </div>
        <div className="card-content">
            <div className="level middle">
                <div className="level-left middle">
                    <span className="setting-icon">
                    <i class="fas fa-money-bill"></i>
                                                            </span>
                    <div className="subheading">Preffered Currency</div>
                </div>
                <div className="level-right">
                <select class="input-select" style={{width:150+"px"}}>
                                <option>USD</option>
                                <option>TRY</option>
                                <option>CAD</option>
                                <option>AUD</option>
                            </select>                </div>
            </div>
        </div>
    </div>
</div>
    </React.Fragment>
}

export default Settings;
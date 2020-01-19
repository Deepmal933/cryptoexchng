import React, { useState } from "react";
import Tabbar from "../../common/tabbar/tabbar"
import Account from "./account/Account";
import Security from "./security/security";
import Notification from './notification/notification'
import Identification from './identification/identification';
import Settings from './settings/settings'
import DeviceMng from './security/devicemng/devicemng'
import Announcement from './account/announcement/announcement'
import Api from './api/api'
const AccountHome = props => {

    const [index,setIndex] = useState(0);

    const onchange = index =>{
setIndex(index);
    }
  return (
    <React.Fragment>
      <div className="wrapper account">
        <h1 className="page-title">Account</h1>
        <Tabbar
          options={[
            "Account",
            "Security",
            "Identification",
            "Notification",
            "API",
            "Settings"
          ]}
          selected={index}
          onchange={onchange}
        />
        { index === 0 && <Account/>}
        { index === 1 && <Security/>}
        {index === 2 && <Identification/>}
        {index === 3 && <Notification/>}
        {index === 4 && <Api/>}
        {index === 5 && <Settings/>}


      </div>
    </React.Fragment>
  );
};

export default AccountHome;

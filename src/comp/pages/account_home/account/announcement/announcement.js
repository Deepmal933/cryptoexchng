import React from "react";
import './announcement.css'
const Announcement = props => {
  return (
    <React.Fragment>
     <div className="announcement">
         <div className="subheader">
             <span className="subheader-icon flex-center" onClick={()=>{props.onback()}}><i class="fas fa-chevron-left"></i></span>
         <div className="subheader-title">
         <div className="subtitle is-4">Announcement</div>
         </div>
         </div>
         <div className="card options">
              <div className="card-content">
                <div className="level">
                    <div className="level-left ver">
                        <div className="subtitle is-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</div>
                        <div className="subtext">Valid upto 23/1/2019</div>
                    </div>
                    <div className="level-right ver">
                        <div className="subtext">12/12/2019 23:45:45 PM</div>
                    </div>

                </div>
              </div>
              <div className="card-content">
                <div className="level">
                    <div className="level-left ver">
                        <div className="subtitle is-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</div>
                        <div className="subtext">Valid upto 23/1/2019</div>
                    </div>
                    <div className="level-right ver">
                        <div className="subtext">12/12/2019 23:45:45 PM</div>
                    </div>

                </div>
              </div>
            </div>
     </div>
    </React.Fragment>
  );
};

export default Announcement;

import React from "react";

const AntiPhising = props => {
  return (
    <div className="dialog-back flex-center anti-phising-dialog">
      <div className="dialog">
        <div className="dialog-header">
          <div className="level middle">
            <div className="level-left">
              <div className="subtitle is-5">Anti phishing code</div>
            </div>
            <div className="level-right">
              <span
                className="close-icon flex-center"
                onClick={() => {
                  props.onclose();
                }}
              >
                <i class="fas fa-times"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="dialog-content">
            <div class="info">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc
            </div>
            <br/>
          <div className="input-text">
            <input type="text" placeholder="Phrase" />
          </div>
<br/>
          <div className="level middle">
              <div className="level-left">
              </div>
              <div className="level-right"> <button class="btn-primary">Save</button>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntiPhising;

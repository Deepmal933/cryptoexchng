import React, { useState } from "react";
import "./steps.css";
import StepBar from "../../../../common/stepbar/stepbar";
import ImgUpload from "../../../../common/imgupload/imgupload";

const Steps = props => {
    const [start, setStart] = useState(false);
    const [selected, setSelected] = useState(0);
    return (
        <React.Fragment>
            <div className="iden-steps">
                {!start && (
                    <div className="card">
                        <div className="card-content">
                            <div className="subtitle is-5">Start Identification</div>
                            <br />
                            <select class="input-select">
                                <option>Select your Country</option>
                                <option>Turkey</option>
                                <option>Canada</option>
                                <option>United States</option>
                                <option>Australia</option>
                            </select>
                            <br />
                            <button
                                className="btn-primary"
                                onClick={() => {
                                    setStart(true);
                                }}
                            >
                                Next
              </button>
                        </div>
                    </div>
                )}
                {start && (
                    <div>
                        <StepBar selected={selected}></StepBar>
                        <br />
                        {selected === 0 && (
                            <div className="iden-step is-1">
                                <div className="card">
                                    <div className="card-content">
                                        <div className="subtitle is-5">Step A : Verify your proof of ID</div>
                                        <br />
                                        <label>Identification Number</label>
                                        <div className="input-text">
                                            <input type="text" placeholder="Id Proof Number" />
                                        </div>
                                        <br />
                                        <label>Birthdat</label>
                                        <div className="input-text">
                                            <input type="date" placeholder="Birthdate" />
                                        </div>
                                        <br />
                                        <button className="btn-primary" onClick={() => { setSelected(selected + 1) }}> Verify </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {selected === 1 && <div className="iden-step is-4">
                            <div className="card">
                                <div className="card-content">
                                    <div className="subtitle is-5">Step A : Verify your Details</div>
                                    <br />
                                    <label>Full Name</label>
                                    <div className="input-text">
                                        <input type="text" placeholder="First Name / Last Name" />
                                    </div>
                                    <br />
                                    <label>Id Number</label>
                                    <div className="input-text">
                                        <input type="text" placeholder="Document Number" />
                                    </div>
                                    <br />
                                    <label>Birthdate</label>
                                    <div className="input-text">
                                        <input type="date" placeholder="Birthdate" />
                                    </div>
                                    <br />
                                    <button className="btn-primary" onClick={() => { setSelected(selected + 1) }}> Verify </button>
                                </div>
                            </div></div>}

                        {selected === 2 && <div className="iden-step is-2">
                            <div className="card">
                                <div className="card-content">
                                    <div className="subtitle is-5">Step B : Upload proof of ID</div>
                                    <br />
                                    <div className="row">
                                        <div className="col is-2">
                                            <ImgUpload />
                                        </div>
                                        <div className="col is-2 flex-center">
                                            <img src="./img/user_iden.png" style={{ width: 80 + "%" }}></img>
                                        </div>
                                    </div>

                                    <br />
                                    <button className="btn-primary" onClick={() => { setSelected(selected + 1) }}> Verify </button>
                                </div>
                            </div>
                        </div>}
                        {selected === 3 && <div className="iden-step is-3">
                            <div className="card">
                                <div className="card-content">
                                    <div className="subtitle is-5">Step C : Upload Document</div>
                                    <br />
                                    <div className="row">
                                        <div className="col is-2">
                                            <ImgUpload />
                                        </div>
                                        <div className="col is-2">
                                            <div className="card-content">
                                                <div className="subtext">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc
                                </div></div>
                                        </div>
                                    </div>

                                    <br />
                                    <button className="btn-primary" onClick={() => { setSelected(selected + 1) }}> Verify </button>
                                </div>
                            </div>
                        </div>}
                        {selected === 4 && <div className="iden-step is-4">
                            <div className="card">
                                <div className="card-content">
                                    <div className="subtitle is-5">
Verification done!!!
                                        </div>
                                <div className="subtext">
                                Lorem Ipsum is simply dummy text of the printing and typesetting dummy text ever sinc

                                </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};
export default Steps;

import React from 'react'
import './stepbar.css'

const StepBar = props =>{

    return (
        <React.Fragment>
            <div className="stepbar">
                <span className={props.selected===0 ? "step check selected" : props.selected>=0?"step check":"step"}>
                <span class="stepcheck">
                <i class="fas fa-check"></i>
                </span>
                </span>
                <span className={props.selected===1 ? "step check selected" : props.selected>=1?"step check":"step"}>
                <span class="stepcheck">
                <i class="fas fa-check"></i>
                </span>
                </span>
                <span className={props.selected===2 ? "step check selected" : props.selected>=2?"step check":"step"}>
                <span class="stepcheck">
                <i class="fas fa-check"></i>
                </span>
                </span>
                <span className={props.selected===3 ? "step check selected" : props.selected>=3?"step check":"step"}>
                <span class="stepcheck">
                <i class="fas fa-check"></i>
                </span>

                </span>
                <div className="progressbar" >
<div className="progress" style={{width:props.selected*33+"%"}}>

</div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default StepBar;
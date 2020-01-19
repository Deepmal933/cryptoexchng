import React from 'react'
import './apikey.css'

const ApiKey = props =>{
    return <div className="dialog-back flex-center api-key-dialog">
        <div className="dialog">
            <div className="dialog-header">
<div className="level middle">
    <div className="level-left">
        <div className="subtitle is-5">API Key Generator</div>
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
                        <div className="subtext">This key shows only once and can’t be retrieved once it’s lost. Please keep it properly</div>
                    </div>
                </div>
                <br/>
                <label>
                    API Key
                </label>
                <div class="level middle">
                    <div className="level-left ver">
<div className="subtitle is-6">462j223tu3823ug2784u342y4824824hg2</div>
                    </div>
                    <div classNAme="level-right ver">
                    <a className="btn-link"><i class="far fa-copy"></i>&nbsp;COPY</a>

                    </div>
                </div>
                <label>
                    Sceret Key
                </label>
                <div class="level middle">
                    <div className="level-left ver">
<div className="subtitle is-6">46dnsknsdkdsnkdsn</div>
                    </div>
                    <div classNAme="level-right ver">
                    <a className="btn-link"><i class="far fa-copy"></i>&nbsp;COPY</a>

                    </div>
                </div>
                <label>
                    Permission
                </label>
                <div class="level middle">
                    <div className="level-left ver">
<div className="subtitle is-6">READ,WRITE</div>
                    </div>
                   
                </div>
                <label>
                    Binded IP
                </label>
                <div class="level middle">
                    <div className="level-left ver">
<div className="subtitle is-6">-</div>
                    </div>
                  
                </div>
                
            </div>
        </div>
    </div>
}

export default ApiKey;
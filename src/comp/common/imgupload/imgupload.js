import React, { useRef } from 'react'
import './imgupload.css'

const ImgUpload = props =>{
    const fileinput = useRef();
    return <React.Fragment>
        <div className="img-upload">
            <div className="uploadback">
            <input type="file" ref={fileinput}/>
            <span>.pdf .jpg .jpeg file only &amp; file size shoudn't be more than 500kb</span>
            <button className="btn-upload">Choose file</button>
            </div>
        </div>
    </React.Fragment>
}

export default ImgUpload;
import React, {useEffect} from "react";

import "./css/Upload.css"

const Upload = (props) => {
    useEffect(() => {
        document.title = props.title;
    }, [props.title]);
    return (
        <div id="upload-img">
            <div id="upload-btn">
                <img src="img/photo.png"></img>
                <button>Upload</button>
            </div>
        </div>
    );
}

export default Upload;
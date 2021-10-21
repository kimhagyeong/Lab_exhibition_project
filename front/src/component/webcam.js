// import { DesktopAccessDisabledSharp } from '@material-ui/icons';
import React from 'react';
import Webcam from "react-webcam";

// const videoConstraints = {height: 540, width: 720, resizeMode:"crop-and-scale"};


const WebcamCapture = (props) => {
    const webcamRef = React.useRef(null);

    return (
      <>
        <Webcam
          style={{ transform: `rotate(270deg)`, marginTop: '90px'}}
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          // height={540}
          mirrored={true}
          maxScale={5}
          // videoConstraints = {videoConstraints}
          onClick={()=>{
              props.setCameraImg(webcamRef.current.getScreenshot({width: 1440,height:1080, transform: `rotate(270deg)`}));
              props.setPageNum("3");
            }}
        />
        <div class="guideline"
        onClick={()=>{
          props.setCameraImg(webcamRef.current.getScreenshot({width: 1440,height:1080, transform: `rotate(270deg)`}));
          props.setPageNum("3");
        }}>
          
        </div>
      </>
    );
  };

  export default WebcamCapture;
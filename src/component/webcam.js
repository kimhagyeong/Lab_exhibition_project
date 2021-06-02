import React from 'react';
import Webcam from "react-webcam";
const WebcamCapture = (props) => {
    const webcamRef = React.useRef(null);

    return (
      <>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={650}
          mirrored={true}
          onClick={()=>{
              props.setCameraImg(webcamRef.current.getScreenshot({width: 650}));
              props.setPageNum("3");
            }}
        />
      </>
    );
  };

  export default WebcamCapture;
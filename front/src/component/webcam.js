// import { DesktopAccessDisabledSharp } from '@material-ui/icons';
import React from 'react';
import Webcam from "react-webcam";

// const videoConstraints = {height: 540, width: 720, resizeMode:"crop-and-scale"};


const WebcamCapture = (props) => {
    const webcamRef = React.useRef(null);

    return (
      <>
        <Webcam
          style={{ transform: `rotate(90deg)`, marginTop: '90px'}}
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          // height={540}
          mirrored={true}
          maxScale={5}
          // videoConstraints = {videoConstraints}
          onClick={()=>{
              props.setCameraImg(webcamRef.current.getScreenshot({width: 1440,height:1080}));
              props.setPageNum("3");
            }}
        />
      </>
    );
  };

  export default WebcamCapture;

// cam resolution : 1080(w) x 1440(h)
// 현재 전송되는 사진 크기가 page C에서 리사이즈 된 결과가 전송되고 있음
// width={650} 변경하면 page B에서 변경됨. 이를 보이는거만 리사이즈 필요


// webcam width = 540 이면 비율상 height = 720
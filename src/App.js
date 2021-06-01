import React, { useState} from 'react';
import './App.css';
import GlobalStyle from "./component/GlobalStyles"
import theme from "./component/theme"
import Home from "./component/page/A_home";
import Camera from "./component/page/B_Camera";
import CameraConfirm from "./component/page/C_CameraConfirm";
import ChooseMode from "./component/page/D_ChooseMode";
import ModeA from "./component/page/E_ChooseA_1";
import ModeA2 from "./component/page/E_ChooseA_2";
import ModeB from "./component/page/F_ChooseB_1";
import ModeB2 from "./component/page/F_ChooseB_2";
import Result from "./component/page/G_Result";
import Print from "./component/page/H_Print";
import End from "./component/page/I_End";

function App() {

  const [cameraImg, setCameraImg] = useState(theme.DefaultImgSrc);
  const [resultImg, setResultImg] = useState(theme.DefaultImgSrc);
  const [mode, setMode] = useState("");
  const [numAI, setNumAI] = useState("");

  const reset=()=>{
    setCameraImg(theme.DefaultImgSrc);
    setResultImg("");
    setMode("");
    setNumAI("");
    console.log("리셋");
  }
  
  const setCameraImgFunction=(data)=>{
    setCameraImg(data)
  }

  const setModeFunction=(data)=>{
    setMode(data);
  }

  const setNumAIFunction = (data) =>{
    setNumAI(data)
  }
  
  const setResultImgFunction = (data) =>{
    setResultImg(data)
  }
  
  return (
    <>
      <GlobalStyle />
      <Home></Home>
      <Camera reset={reset} setCameraImg ={setCameraImgFunction}></Camera>
      <CameraConfirm cameraImg={cameraImg}></CameraConfirm>
      <ChooseMode></ChooseMode>
      <ModeA setMode={setModeFunction} mode={mode}></ModeA>
      <ModeA2 setMode={setModeFunction}></ModeA2>
      <ModeB setMode={setModeFunction}></ModeB>
      <ModeB2 setMode={setModeFunction}></ModeB2>
      <Result mode={mode} setNumAI={setNumAIFunction}></Result>
      <Print mode={mode} numAI={numAI} cameraImg={cameraImg} resultImg={resultImg} setResultImg={setResultImgFunction}></Print>
      <End resultImg={resultImg}></End>
    </>
  );
}

export default App;

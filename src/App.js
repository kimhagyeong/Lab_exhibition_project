import React, { useState, useEffect } from 'react';
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
  const [resultImg, setResultImg] = useState("");
  const [mode, setMode] = useState("");
  const [numAI, setNumAI] = useState("");

  const reset=()=>{
    setCameraImg(theme.DefaultImgSrc);
    setResultImg("");
    setMode("");
    setNumAI("");
    console.log("리셋");
  }
  useEffect(() => {
    console.log(mode);
  }, [mode]);
  
  return (
    <>
      <GlobalStyle />
      <Home></Home>
      <Camera reset={reset} setCameraImg ={setCameraImg}></Camera>
      <CameraConfirm cameraImg={cameraImg}></CameraConfirm>
      <ChooseMode></ChooseMode>
      <ModeA setMode={setMode} mode={mode}></ModeA>
      <ModeA2 setMode={setMode}></ModeA2>
      <ModeB setMode={setMode}></ModeB>
      <ModeB2 setMode={setMode}></ModeB2>
      <Result mode={mode} setNumAI={setNumAI}></Result>
      <Print mode={mode} numAI={numAI} cameraImg={cameraImg} resultImg={resultImg} setResultImg={setResultImg}></Print>
      <End resultImg={resultImg}></End>
    </>
  );
}

export default App;

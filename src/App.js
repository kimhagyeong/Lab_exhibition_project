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
  const [pageNum, setPageNum] = useState("1");

  const reset=()=>{
    setCameraImg(theme.DefaultImgSrc);
    setResultImg("");
    setMode("");
    setNumAI("");
    setPageNum("1");
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

  const setPageNumFunction = (data) =>{
    setPageNum(data);
  }
  
  return (
    <>
      <GlobalStyle />
      {pageNum==="1"?<Home setPageNum={setPageNumFunction}></Home>:null}
      {pageNum==="2"?<Camera setPageNum={setPageNumFunction} reset={reset} setCameraImg ={setCameraImgFunction}></Camera>:null}
      {pageNum==="3"?<CameraConfirm setPageNum={setPageNumFunction} reset={reset}  cameraImg={cameraImg}></CameraConfirm>:null}
      {pageNum==="4"?<ChooseMode setPageNum={setPageNumFunction} reset={reset} ></ChooseMode>:null}
      {pageNum==="5"?<ModeA setPageNum={setPageNumFunction} reset={reset} setMode={setModeFunction} mode={mode}></ModeA>:null}
      {pageNum==="6"?<ModeA2 setPageNum={setPageNumFunction} reset={reset} setMode={setModeFunction}></ModeA2>:null}
      {pageNum==="7"?<ModeB setPageNum={setPageNumFunction} reset={reset} setMode={setModeFunction}></ModeB>:null}
      {pageNum==="8"?<ModeB2 setPageNum={setPageNumFunction} reset={reset} setMode={setModeFunction}></ModeB2>:null}
      {pageNum==="9"?<Result setPageNum={setPageNumFunction} reset={reset} mode={mode} setNumAI={setNumAIFunction}></Result>:null}
      {pageNum==="10"?<Print setPageNum={setPageNumFunction} reset={reset} mode={mode} numAI={numAI} cameraImg={cameraImg} resultImg={resultImg} setResultImg={setResultImgFunction}></Print>:null}
      {pageNum==="11"?<End setPageNum={setPageNumFunction} reset={reset} resultImg={resultImg}></End>:null}
      
    </>
  );
}

export default App;

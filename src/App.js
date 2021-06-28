import React, { useState} from 'react';
import './App.css';
import GlobalStyle from "./component/GlobalStyles"
import theme from "./component/theme"
import Home from "./component/page/A_home";
import Camera from "./component/page/B_Camera";
import CameraConfirm from "./component/page/C_CameraConfirm";
import Painter from "./component/page/D_Painter_1";
import Painter2 from "./component/page/D_Painter_2";
import Masterpiece from "./component/page/F_Masterpiece";
import Variation from "./component/page/G_Variation";
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
      {pageNum==="4"?<Painter setPageNum={setPageNumFunction} reset={reset} setMode={setModeFunction} mode={mode}></Painter>:null}
      {pageNum==="5"?<Painter2 setPageNum={setPageNumFunction} reset={reset} setMode={setModeFunction}></Painter2>:null}
      {pageNum==="6"?<Masterpiece setPageNum={setPageNumFunction} reset={reset} mode={mode} setNumAI={setNumAIFunction}></Masterpiece>:null}
      {pageNum==="7"?<Variation setPageNum={setPageNumFunction} reset={reset} mode={mode} numAI={numAI}></Variation>:null}
      {pageNum==="8"?<Print setPageNum={setPageNumFunction} reset={reset} mode={mode} numAI={numAI} cameraImg={cameraImg} resultImg={resultImg} setResultImg={setResultImgFunction}></Print>:null}
      {pageNum==="9"?<End setPageNum={setPageNumFunction} reset={reset} resultImg={resultImg}></End>:null}
      
    </>
  );
}

export default App;

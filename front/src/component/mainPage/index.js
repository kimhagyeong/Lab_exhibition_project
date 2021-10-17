import React, { useState } from 'react';
import '../../App.css';
import GlobalStyle from "../GlobalStyles"
import theme from "../theme"
import Home from "./A_home";
import Camera from "./B_Camera";
import CameraResult from "./C_Camera_result";
import Painter from "./D_Painter_1";
import Painter2 from "./D_Painter_2";
import Masterpiece from "./F_Masterpiece";
import Variation from "./G_Variation";
import Print from "./H_Print";
import End from "./I_End";

function App() {

  const [cameraImg, setCameraImg] = useState(theme.DefaultImgSrc);
  const [babyFaceImg, setBabyFaceImg] = useState(theme.DefaultImgSrc);
  const [cropImg, setCropImg] = useState(theme.DefaultImgSrc);
  const [resultImg, setResultImg] = useState(theme.DefaultImgSrc);
  const [painter, setPainter] = useState("");
  const [masterpiece, setMasterpiece] = useState("");
  // const [pageNum, setPageNum] = useState("1");
  const [pageNum, setPageNum] = useState("1");
  const [masterpieceResultImg, setMasterpieceResultImg] = useState(""
    // {
    // "리듬들(1934)":theme.DefaultImgSrc ,
    // "삶의 기쁨(1930)":theme.DefaultImgSrc, 
    // "무한리듬(1934)" :theme.DefaultImgSrc,
    // "가죽나막신(1888)": theme.DefaultImgSrc, 
    // "밤의 카페 테라스(1888)" :theme.DefaultImgSrc, 
    // "별이 빛나는 밤에(1889)": theme.DefaultImgSrc,
    // "뮤직(1904)" :theme.DefaultImgSrc, 
    // "채링 크로스 다리(1906)":theme.DefaultImgSrc, 
    // "콜리우르의 보트들(1905)":theme.DefaultImgSrc,
    // "비관론과 낙관론(1923)":theme.DefaultImgSrc, 
    // "원형 비행기(1924)":theme.DefaultImgSrc, 
    // "불꽃놀이(1917)":theme.DefaultImgSrc,
    // "뉴욕(1913)":theme.DefaultImgSrc, 
    // "성직자(1913)":theme.DefaultImgSrc, 
    // "우드니(젊은미국소녀)(1913)": theme.DefaultImgSrc,
    // "거울 앞 소녀(1932)":theme.DefaultImgSrc, 
    // "자화상(1901)":theme.DefaultImgSrc, 
    // "la muse(1935)":theme.DefaultImgSrc
  // }
  );

  const reset = () => {
    setCameraImg(theme.DefaultImgSrc);
    setBabyFaceImg(theme.DefaultImgSrc);
    setCropImg(theme.DefaultImgSrc);
    setResultImg("");
    setPainter("");
    setMasterpiece("");
    setPageNum("1");
  }

  const setBabyFaceImgFunction = (data) =>{
    setBabyFaceImg(data)
  }

  const setCropImgFunction = (data) => {
    setCropImg(data)
  }

  const setCameraImgFunction = (data) => {
    setCameraImg(data)
  }

  const setPainterFunction = (data) => {
    setPainter(data);
  }

  const setMasterpieceFunction = (data) => {
    setMasterpiece(data)
  }

  const setResultImgFunction = (data) => {
    setResultImg(data)
  }

  const setPageNumFunction = (data) => {
    setPageNum(data);
  }
  
  const setMasterpieceResultImgFunction = (data) => {
    setMasterpieceResultImg(data);
  }
  return (
    <>
      <GlobalStyle />
      {pageNum === "1" ? <Home setPageNum={setPageNumFunction}></Home> : null}
      {pageNum === "2" ? <Camera setPageNum={setPageNumFunction} reset={reset} setCameraImg={setCameraImgFunction}></Camera> : null}
      {pageNum === "3" ? <CameraResult setPageNum={setPageNumFunction} reset={reset} cameraImg={cameraImg} babyFaceImg={babyFaceImg} setBabyFaceImg={setBabyFaceImgFunction} cropImg={cropImg} setMasterpieceResultImg={setMasterpieceResultImgFunction} setCropImg={setCropImgFunction}></CameraResult> : null}
      {pageNum === "4" ? <Painter setPageNum={setPageNumFunction} reset={reset} setPainter={setPainterFunction} painter={painter}></Painter> : null}
      {pageNum === "5" ? <Painter2 setPageNum={setPageNumFunction} reset={reset} setPainter={setPainterFunction}></Painter2> : null}
      {pageNum === "6" ? <Masterpiece setPageNum={setPageNumFunction} reset={reset} painter={painter} setMasterpiece={setMasterpieceFunction} cameraImg={cameraImg} masterpieceResultImg={masterpieceResultImg}></Masterpiece> : null}
      {pageNum === "7" ? <Variation setPageNum={setPageNumFunction} reset={reset} painter={painter} masterpiece={masterpiece} setResultImg={setResultImgFunction}></Variation> : null}
      {pageNum === "8" ? <Print setPageNum={setPageNumFunction} reset={reset} painter={painter} masterpiece={masterpiece} cameraImg={cameraImg} resultImg={resultImg} setResultImg={setResultImgFunction}></Print> : null}
      {pageNum === "9" ? <End setPageNum={setPageNumFunction} reset={reset} resultImg={resultImg} masterpiece={masterpiece} setResultImg={setResultImgFunction}></End> : null}
    </>
  );
}

export default App;

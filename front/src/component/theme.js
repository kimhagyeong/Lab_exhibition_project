import page5_1 from "../resource/page5_1.png";
import page5_2 from "../resource/page5_2.png";
import page5_3 from "../resource/page5_3.png";
import page6_1 from "../resource/page6_1.png";
import page6_2 from "../resource/page6_2.png";
import page6_3 from "../resource/page6_3.png";

import default_image from "../resource/DICE.png";
import masterpiece1_1 from "../resource/page5_1.png";
import masterpiece1_2 from "../resource/page5_2.png";
import masterpiece1_3 from "../resource/page5_3.png";
import masterpiece2_1 from "../resource/page5_1.png";
import masterpiece2_2 from "../resource/page5_2.png";
import masterpiece2_3 from "../resource/page5_3.png";
import masterpiece3_1 from "../resource/page5_1.png";
import masterpiece3_2 from "../resource/page5_2.png";
import masterpiece3_3 from "../resource/page5_3.png";
import masterpiece4_1 from "../resource/page5_1.png";
import masterpiece4_2 from "../resource/page5_2.png";
import masterpiece4_3 from "../resource/page5_3.png";
import masterpiece5_1 from "../resource/page5_1.png";
import masterpiece5_2 from "../resource/page5_2.png";
import masterpiece5_3 from "../resource/page5_3.png";
import masterpiece6_1 from "../resource/page5_1.png";
import masterpiece6_2 from "../resource/page5_2.png";
import masterpiece6_3 from "../resource/page5_3.png";

const BubbleButton = {
  width: "382px",
  height: "128px"
}
const CategoryImg = {
  "": "",
  "로베르 들로네": page5_1,
  "반 고흐": page5_2,
  "앙드레 드랭": page5_3,
  "자코모 발라": page6_1,
  "프란시스 피카비아": page6_2,
  "피카소": page6_3
};

const PainterArts = {
  "": ["", "", ""],
  "로베르 들로네": ["리듬들(1934)", "삶의 기쁨(1930)", "무한리듬(1934)"],
  "반 고흐": ["가죽나막신(1888)", "밤의 카페 테라스(1888)", "별이 빛나는 밤에(1889)"],
  "앙드레 드랭": ["뮤직(1904)", "채링 크로스 다리(1906)", "콜리우르의 보트들(1905)"],
  "자코모 발라": ["비관론과 낙관론(1923)", "원형 비행기(1924)", "불꽃놀이(1917)"],
  "프란시스 피카비아": ["뉴욕(1913)", "성직자(1913)", "우드니(젊은미국소녀)(1913)"],
  "피카소": ["거울 앞 소녀(1932)", "자화상(1901)", "la muse(1935)"],
};

const Masterpieces ={
  "리듬들(1934)":masterpiece1_1 ,
  "삶의 기쁨(1930)":masterpiece1_2, 
  "무한리듬(1934)" :masterpiece1_3,
  "가죽나막신(1888)": masterpiece2_1, 
  "밤의 카페 테라스(1888)" :masterpiece2_2, 
  "별이 빛나는 밤에(1889)": masterpiece2_3,
  "뮤직(1904)" :masterpiece3_1, 
  "채링 크로스 다리(1906)":masterpiece3_2, 
  "콜리우르의 보트들(1905)":masterpiece3_3,
  "비관론과 낙관론(1923)":masterpiece4_1, 
  "원형 비행기(1924)":masterpiece4_2, 
  "불꽃놀이(1917)":masterpiece4_3,
  "뉴욕(1913)":masterpiece5_1, 
  "성직자(1913)":masterpiece5_2, 
  "우드니(젊은미국소녀)(1913)": masterpiece5_3,
  "거울 앞 소녀(1932)":masterpiece6_1, 
  "자화상(1901)":masterpiece6_2, 
  "la muse(1935)":masterpiece6_3
}


const theme = {
  OrangeColor: "rgb(254,143,72)",
  LightOrangeColor: "#FD9142",
  WhiteColor: "#FFFFFF",
  LightWhiteColor: "#F4F4F4",
  GmarketFontBold: "GmarketSansBold",
  GmarketFontMedium: "GmarketSansMedium",
  GmarketFontLight: "GmarketSansLight",
  BubbleButton,
  DefaultImgSrc: default_image,
  CategoryImg,
  PainterArts,
  Masterpieces
};

export default theme;
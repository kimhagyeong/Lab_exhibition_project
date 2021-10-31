import page5_1 from "../resource/page5_1.jpg";
import page5_2 from "../resource/page5_2.jpg";
import page5_3 from "../resource/page5_3.jpg";
import page6_1 from "../resource/page6_1.jpg";
import page6_2 from "../resource/page6_2.jpg";
import page6_3 from "../resource/page6_3.jpg";

import default_image from "../resource/DICE.png";
import masterpiece1_1 from "../resource/page5_11.jpg";
import masterpiece1_2 from "../resource/page5_12.jpg";
import masterpiece1_3 from "../resource/page5_13.jpg";
import masterpiece2_1 from "../resource/page5_21.jpg";
import masterpiece2_2 from "../resource/page5_22.jpg";
import masterpiece2_3 from "../resource/page5_23.jpg";
import masterpiece3_1 from "../resource/page5_31.jpg";
import masterpiece3_2 from "../resource/page5_32.jpg";
import masterpiece3_3 from "../resource/page5_33.jpg";
import masterpiece4_1 from "../resource/page5_41.jpg";
import masterpiece4_2 from "../resource/page5_42.jpg";
import masterpiece4_3 from "../resource/page5_43.jpg";
import masterpiece5_1 from "../resource/page5_51.jpg";
import masterpiece5_2 from "../resource/page5_52.jpg";
import masterpiece5_3 from "../resource/page5_53.jpg";
import masterpiece6_1 from "../resource/page5_61.jpg";
import masterpiece6_2 from "../resource/page5_62.jpg";
import masterpiece6_3 from "../resource/page5_63.jpg";

const BackendServer = 'http://218.150.183.59:8000/'
// const BackendServer = 'http://127.0.0.1:8000/'

const BubbleButton = {
  width: "382px",
  height: "128px"
}

const Painter = ["로베르 들로네","반 고흐","앙드레 드랭",
                "자코모 발라","프란시스 피카비아","피카소"];
const Masterpiecelist = [
  "리듬들(1934)",
  "삶의 기쁨(1930)",
  "무한리듬(1934)" ,
  "가죽나막신(1888)",
  "밤의 카페 테라스(1888)" ,
  "별이 빛나는 밤에(1889)",
  "뮤직(1904)" ,
  "채링 크로스 다리(1906)",
  "콜리우르의 보트들(1905)",
  "비관론과 낙관론(1923)",
  "원형 비행기(1924)",
  "불꽃놀이(1917)",
  "뉴욕(1913)",
  "성직자(1913)",
  "우드니(젊은미국소녀)(1913)",
  "거울 앞 소녀(1932)",
  "자화상(1901)",
  "la muse(1935)"
]

const CategoryImg = {
  "": "",
  "로베르 들로네": page5_1,
  "반 고흐": page5_2,
  "앙드레 드랭": page5_3,
  "자코모 발라": page6_1,
  "프란시스 피카비아": page6_2,
  "피카소": page6_3
};
const CategoryInfo ={
  "": "",
  "로베르 들로네":  "출생지: 프랑스 파리　　　　출생: 1885/04/12　　　　사망: 1941/10/25　　　　예술 사조: 근대미술, 탈인상주의, 입체주의, 표현주의",
  "반 고흐": "출생지: 네덜란드 준데르트　　　　출생: 1853/03/30　　　　사망: 1890/07/29　　　　예술 사조: 사실주의, 탈인상주의, 자포니즘, 점묘법",
  "앙드레 드랭": "출생지: 프랑스 이블린　　　　출생: 1880/06/10　　　　사망: 1954/09/08　　　　예술 사조: 신고전주의, 표현주의, 야수파, 입체주의",
  "자코모 발라": "출생지: 이탈리아 튜린　　　　출생: 1871/07/18　　　　사망: 1958/03/01　　　　예술 사조: 미래파, 근대 미술, 인상주의, 점묘법",
  "프란시스 피카비아": "출생지: 프랑스 파리　　　　출생: 1879/01/22　　　　사망: 1953/11/30　　　　예술 사조: 초현실주의, 인상주의, 표현주의, 야수파",
  "피카소": "출생지: 스페인 말라가　　　　출생: 1881/10/25　　　　사망: 1973/04/08　　　　예술사조: 입체주의, 초현실주의, 표현주의, 탈인상주의"
}
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
  "": "",
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
  CategoryInfo,
  PainterArts,
  Masterpieces,
  Painter,
  Masterpiecelist,
  BackendServer
};

export default theme;
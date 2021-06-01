import page5_1 from "../resource/page5_1.png";
import page5_2 from "../resource/page5_2.png";
import page5_3 from "../resource/page5_3.png";
import page6_1 from "../resource/page6_1.png";
import page6_2 from "../resource/page6_2.png";
import page6_3 from "../resource/page6_3.png";

import page1_1 from "../resource/page1_1.png";
import page1_2 from "../resource/page1_2.png";

const BubbleButton = {
  width: "382px",
  height: "128px"
}
const CategoryImg = {
  "":"",
  "로베르 들로네": page5_1,
  "반 고흐": page5_2,
  "앙드레 드랭": page5_3,
  "자코모 발라": page6_1,
  "프란시스 피카비아": page6_2,
  "피카소": page6_3,
  "1": page1_1,
  "2": page1_1,
  "3": page1_1,
  "4": page1_2,
  "5": page1_2,
  "6": page1_2,
};

const ArtistArts ={
  "":["","",""],
  "로베르 들로네": ["리듬들(1934)","삶의 기쁨(1930)","무한리듬(1934)"],
  "반 고흐": ["가죽나막신(1888)","밤의 카페 테라스(1888)","별이 빛나는 밤에(1889)"],
  "앙드레 드랭": ["뮤직(1904)","채링 크로스 다리(1906)","콜리우르의 보트들(1905)"],
  "자코모 발라": ["비관론과 낙관론(1923)","원형 비행기(1924)","불꽃놀이(1917)"],
  "프란시스 피카비아": ["뉴욕(1913)","성직자(1913)","우드니(젊은미국소녀)(1913)"],
  "피카소": ["거울 앞 소녀(1932)","자화상(1901)","la muse(1935)"],
}

const theme = {
  OrangeColor: "#FD7F23",
  LightOrangeColor: "#FD9142",
  WhiteColor: "#FFFFFF",
  LightWhiteColor: "#F4F4F4",
  GmarketFontBold: "GmarketSansBold",
  GmarketFontMedium: "GmarketSansMedium",
  GmarketFontLight: "GmarketSansLight",
  BubbleButton,
  DefaultImgSrc: "https://defavoritebucket-resized.s3.amazonaws.com/popup/hyun_gum_IMG_3164_2020-02-12_091133.6554680000.JPG",
  CategoryImg,
  ArtistArts
};

export default theme;
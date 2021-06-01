import styled from "styled-components";
import theme from "./theme"

const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;   
    &>div:nth-child(1){
       width:185px;
       height:100%;
       position:relative;
       h2{
            position:absolute;
            -webkit-transform:rotate(270deg);
            font: normal normal normal 34px/43px ${theme.GmarketFontBold};
            letter-spacing: 1.36px;
            color: ${theme.LightOrangeColor};
            opacity: 1;
            width:340px;
            top:490px;
            right:-49px;
       }
       &>a:nth-child(1)>img{
            position:absolute;
            top: 46px;
            left: 47px;
            width: 43px;
            height: 41px;
       }
       &>a:nth-child(3)>img{
        position:absolute;
        top: 970px;
        left: 31px;
        width: 74px;
        height: 74px;
   }
   }
  
    &>div:nth-child(3){
        width:185px;
        height:100%;
        position:relative;
        h2{
            position:absolute;
            -webkit-transform:rotate(90deg);
            font: normal normal normal 34px/43px ${theme.GmarketFontBold};
            letter-spacing: 1.36px;
            color:  ${theme.LightOrangeColor};
            opacity: 1;
            width:550px;
            top: 470px;
            right: -210px;
            // right: -230px;
        }
    }
`;
export default Section;
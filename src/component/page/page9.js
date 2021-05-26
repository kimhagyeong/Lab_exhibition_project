import SuperPage from "./page2"
import styled from "styled-components";
import theme from "../theme";
import Grid from '@material-ui/core/Grid';
import backSvg from "../../resource/BTN-18.svg"
import homeSvg from "../../resource/BTN-19.svg"
import Image2 from '../../resource/page5_2.png';
import Image3 from '../../resource/page8_1.png';
import nextSvg from "../../resource/BTN-18.svg";
import BTN from "../../resource/BTN-15.svg";

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
       &>img:nth-child(1){
            position:absolute;
            top: 46px;
            left: 47px;
            width: 43px;
            height: 41px;
       }
       &>img:nth-child(3){
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

const ContentStyle = styled.div`
    width:1550px;
    height:100%;
    &>div>div{
        text-align:center;
    }
    &>div>div:nth-child(1){
        text-align:center;
        padding-top:30px;
        &>div{
            width: 679px;
            height: 39px;
            background: rgb(255,210,181) 0% 0% no-repeat padding-box;
            display:inline-block;
            margin-bottom:-67px;
        }
        &>h1{
            font: normal normal normal 47px/53px ${theme.GmarketFontMedium};
            letter-spacing: 0px;
            color: #3B3B3B;
            opacity: 1;
            margin-top:0;
        } 
    }
    &>div>div:nth-child(2){
        &>div{
            height:637px;
        }
        &>div>div{
            width: 262px;
            height: 262px;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            border: 1px solid #707070;
            display:block;
            margin-top:0px;

        }
        img{
            width: 262px;
            height: 241px;
            display:block;
            margin-bottom:0px;
        }
    }
    &>div>div:nth-child(3){
        position:relative;
        img:nth-child(1){
            width: 88px;
            height: 66px;
            position: absolute;
            top: 290px;
            left: -80px;
        }
        img:nth-child(2){
            width: 471px;
            height: 637px;
        }
    }
    &>div>div:nth-child(4){
        img{
            ${theme.BubbleButton}
            margin-top:60px;
        }
    }
`;
class Page extends SuperPage{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    content() {
        return (
            <ContentStyle>
                <Grid container>
                    <Grid item xs={12}>
                        <div></div>
                        <h1>완성된 사진입니다. 어떠신가요?<br />N초 후 인쇄를 진행합니다.</h1>
                    </Grid>
                    <Grid item xs={6} alignItems="center">
                        <Grid container
                            direction="column"
                            justify="space-between"
                            alignItems="center">
                                <div></div>
                                <img src={Image2} alt="#"></img>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}
                        alignItems="center"
                    >
                        <img src={nextSvg} alt="#"/>  
                        <img src={Image3} alt="#"></img>
                    </Grid>
                    <Grid item xs={12}>
                        <img src={BTN} alt="#"/>    
                    </Grid>
                </Grid>
            </ContentStyle>
        )
    }

    backButton(){
        return(
            <img src={backSvg} alt="#" />
        )
    }
    render() {
        return (
            <Section color={theme.WhiteColor}>
                <div>
                    <img src={homeSvg} alt="#" />
                    <h2>AI Photographer</h2>
                    {this.backButton()}
                </div>
                {this.content()}
                <div>
                    <h2>KOREATECH 30TH X DICE</h2>
                </div>
            </Section>
        )
    }
}

export default Page;


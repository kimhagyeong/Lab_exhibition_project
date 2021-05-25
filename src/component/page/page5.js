import SuperPage from "./page2"
import styled from "styled-components";
import theme from "../theme";
import Grid from '@material-ui/core/Grid';
import backSvg from "../../resource/BTN-18.svg"
import homeSvg from "../../resource/BTN-19.svg"
import Image1 from '../../resource/page5_1.png';
import Image2 from '../../resource/page5_2.png';
import Image3 from '../../resource/page5_3.png';
import BTN1 from '../../resource/BTN-06.svg';
import BTN2 from '../../resource/BTN-07.svg';
import BTN3 from '../../resource/BTN-08.svg';
import nextSvg from "../../resource/BTN-16.svg";

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
            right: -230px;
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
            width: 590px;
            height: 39px;
            background: rgb(255,210,181) 0% 0% no-repeat padding-box;
            display:inline-block;
            margin-bottom:-67px;
        }
        &>h1{
            font: normal normal normal 47px/42px ${theme.GmarketFontMedium};
            letter-spacing: 0px;
            color: #3B3B3B;
            opacity: 1;
            margin-top:0;
        } 
    }
    &>div>div:nth-child(2){
        img{
            width: 470px;
            height: 470px;
            margin-top:115px;
        }
    }
    &>div>div:nth-child(3){
        img{
            width: 470px;
            height: 470px;
            margin-top:115px;
        }
    }
    &>div>div:nth-child(4){
        img{
            width: 470px;
            height: 470px;
            margin-top:115px;
        }
    }
    
    &>div>div:nth-child(5){
        img{
            ${theme.BubbleButton}
            margin-top:68px;
        }
    }
    &>div>div:nth-child(6){
        img{
            ${theme.BubbleButton}
            margin-top:68px;
        }
    }
    &>div>div:nth-child(7){
        img{
            ${theme.BubbleButton}
            margin-top:68px;
        }
    }
    &>div>div:nth-child(8){
        img{
            width: 74px;
            height: 74px;
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
                        <h1>어떤 화가를 선택하시겠어요?</h1>
                    </Grid>
                    <Grid item xs={4}
                        alignItems="center"
                    >
                        <img src={Image1} alt="#"></img>
                    </Grid>
                    <Grid item xs={4}
                        alignItems="center"
                    >
                        <img src={Image2} alt="#"></img>    
                    </Grid>
                    <Grid item xs={4}
                        alignItems="center"
                    >
                        <img src={Image3} alt="#"></img>    
                    </Grid>
                    <Grid item xs={4}
                        alignItems="center"
                    >
                        <img src={BTN1} alt="#" />
                    </Grid>
                    <Grid item xs={4}
                        alignItems="center">
                        <img src={BTN2} alt="#" />
                    </Grid>
                    <Grid item xs={4}
                        alignItems="center">
                        <img src={BTN3} alt="#" />
                    </Grid>
                    <Grid item xs={12}>
                        <img src={nextSvg} alt="#"/>    
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


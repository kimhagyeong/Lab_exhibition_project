import SuperPage from "./page5"
import styled from "styled-components";
import theme from "../theme";
import Grid from '@material-ui/core/Grid';
import backSvg from "../../resource/BTN-18.svg"
import Image1 from '../../resource/page1_1.png';
import Image2 from '../../resource/page1_2.png';
import Image3 from '../../resource/page1_1.png';
import BTN1 from '../../resource/BTN-12.svg';
import BTN2 from '../../resource/BTN-13.svg';
import BTN3 from '../../resource/BTN-14.svg';
import prevSvg from "../../resource/BTN-17.svg";

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
                        <h1>어떤 화풍을 입혀보시겠어요 ?</h1>
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
                        <img src={prevSvg} alt="#"/>    
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
}

export default Page;


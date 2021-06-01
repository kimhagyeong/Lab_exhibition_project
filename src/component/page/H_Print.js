import SuperPage from "./B_Camera"
import styled from "styled-components";
import theme from "../theme";
import Grid from '@material-ui/core/Grid';
import backSvg from "../../resource/BTN-18.svg"
import nextSvg from "../../resource/BTN-18.svg";
import BTN from "../../resource/BTN-15.svg";
import Section from "../section03";

const ContentStyle = styled.div`
    width:1550px;
    height:100%;
    &>div>div{
        text-align:center;
    }
    &>div>div:nth-child(1){
        text-align:center;
        padding-top:30px;
        margin-bottom: 50px;
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
            &>img{
                width:262px;
                height:262px;
                margin-top:0px;
            }
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
                    <Grid container xs={6} 
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid container
                            direction="column"
                            justify="space-between"
                            alignItems="center">
                                <div><img src={this.props.cameraImg} alt="#"/></div>
                                <img src={theme.CategoryImg[this.props.mode]} alt="#"></img>
                        </Grid>
                    </Grid>
                    <Grid container xs={6}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <img src={nextSvg} alt="#"/>  
                        <img src={this.props.resultImg} alt="#"></img>
                    </Grid>
                    <Grid item xs={12}>
                        <a href="#chooseMode"><img src={BTN} alt="#"/></a>
                    </Grid>
                </Grid>
            </ContentStyle>
        )
    }

    backButton(){
        return(
            <a href="#result"><img src={backSvg} alt="#" /></a>
        )
    }
    render() {
        return (
            <Section id="print">
                {this.commonSection()}
            </Section>
        )
    }
}

export default Page;

import SuperPage from "./E_ChooseA_1.js"
import styled from "styled-components";
import theme from "../theme";
import Grid from '@material-ui/core/Grid';
import backSvg from "../../resource/BTN-18.svg";
import BTN1 from '../../resource/BTN-12.svg';
import BTN2 from '../../resource/BTN-13.svg';
import BTN3 from '../../resource/BTN-14.svg';
import nextSvg from "../../resource/BTN-16.svg";
import Section from "../section02"

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
class Page extends SuperPage {
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
                        <h1>어떤 화풍을 선택하시겠어요?</h1>
                    </Grid>
                    <Grid container xs={4}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <img src={theme.CategoryImg["1"]} alt="#"></img>
                    </Grid>
                    <Grid container xs={4}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <img src={theme.CategoryImg["2"]} alt="#"></img>
                    </Grid>
                    <Grid container xs={4}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <img src={theme.CategoryImg["3"]} alt="#"></img>
                    </Grid>
                    <Grid container xs={4}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <a href="#result" onClick={() => this.props.setMode("1")}><img src={BTN1} alt="#" /></a>
                    </Grid>
                    <Grid container xs={4}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <a href="#result" onClick={() => this.props.setMode("2")}><img src={BTN2} alt="#" /></a>
                    </Grid>
                    <Grid container xs={4}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <a href="#result" onClick={() => this.props.setMode("3")}><img src={BTN3} alt="#" /></a>
                    </Grid>
                    <Grid item xs={12}>
                        <a href="#chooseB_2"><img src={nextSvg} alt="#" /></a>
                    </Grid>
                </Grid>
            </ContentStyle>
        )
    }

    backButton() {
        return (
            <a href="#chooseMode"><img src={backSvg} alt="#" /></a>
        )
    }
    render() {
        return (
            <Section id="chooseB_1">
                {this.commonSection()}
            </Section>
        )
    }
}

export default Page;


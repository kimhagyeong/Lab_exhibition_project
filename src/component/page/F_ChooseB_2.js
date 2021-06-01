import SuperPage from "./E_ChooseA_1.js"
import styled from "styled-components";
import theme from "../theme";
import Grid from '@material-ui/core/Grid';
import BTN1 from '../../resource/BTN-12.svg';
import BTN2 from '../../resource/BTN-13.svg';
import BTN3 from '../../resource/BTN-14.svg';
import prevSvg from "../../resource/BTN-17.svg";
import Section from "../section02";

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
                        <img src={theme.CategoryImg["4"]} alt="#"></img>
                    </Grid>
                    <Grid container xs={4}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <img src={theme.CategoryImg["5"]} alt="#"></img>
                    </Grid>
                    <Grid container xs={4}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <img src={theme.CategoryImg["6"]} alt="#"></img>
                    </Grid>
                    <Grid container xs={4}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <img src={BTN1} alt="#" onClick={() => {this.props.setMode("4"); this.props.setPageNum("10")}} />
                    </Grid>
                    <Grid container xs={4}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <img src={BTN2} alt="#" onClick={() => {this.props.setMode("5"); this.props.setPageNum("10")}} />
                    </Grid>
                    <Grid container xs={4}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                       <img src={BTN3} alt="#" onClick={() => {this.props.setMode("6"); this.props.setPageNum("10")}} />
                    </Grid>
                    <Grid item xs={12}>
                       <img src={prevSvg} alt="#" onClick={()=>this.props.setPageNum("7")}/>
                    </Grid>
                </Grid>
            </ContentStyle>
        )
    }

    render() {
        return (
            <Section id="chooseB_2">
                {this.commonSection()}
            </Section>
        )
    }
}

export default Page;


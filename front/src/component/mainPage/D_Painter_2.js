import SuperPage from "./D_Painter_1.js"
import styled from "styled-components";
import theme from "../theme";
import Grid from '@material-ui/core/Grid';
import BTN1 from '../../resource/BTN-09.svg';
import BTN2 from '../../resource/BTN-10.svg';
import BTN3 from '../../resource/BTN-11.svg';
import prevSvg from "../../resource/BTN-17.svg";
import Section from "../section02"
import Card from '../Card';


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
                        <h1>어떤 화가를 선택하시겠어요?</h1>
                    </Grid>
                    <Grid item xs={4}>
                        <Card 
                            img={theme.CategoryImg["자코모 발라"]}
                            info={theme.CategoryInfo["자코모 발라"]}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Card 
                            img={theme.CategoryImg["프란시스 피카비아"]}
                            info={theme.CategoryInfo["프란시스 피카비아"]}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Card 
                            img={theme.CategoryImg["피카소"]}
                            info={theme.CategoryInfo["피카소"]}/>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={BTN1} alt="#" onClick={() => { this.props.setPainter("자코모 발라"); this.props.setPageNum("6") }} />
                    </Grid>
                    <Grid item xs={4}>
                        <img src={BTN2} alt="#" onClick={() => { this.props.setPainter("프란시스 피카비아"); this.props.setPageNum("6") }} />
                    </Grid>
                    <Grid item xs={4}>
                        <img src={BTN3} alt="#" onClick={() => { this.props.setPainter("피카소"); this.props.setPageNum("6") }} />
                    </Grid>
                    <Grid item xs={12}>
                        <img src={prevSvg} alt="#" onClick={() => this.props.setPageNum("4")} />
                    </Grid>
                </Grid>
            </ContentStyle>
        )
    }
    render() {
        return (
            <Section id="chooseA_2">
                {this.commonSection()}
            </Section>
        )
    }
}

export default Page;


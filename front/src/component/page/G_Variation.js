import SuperPage from "./B_Camera"
import styled from "styled-components";
import theme from "../theme";
import Grid from '@material-ui/core/Grid';
import backSvg from "../../resource/BTN-18.svg"
import BTN1 from '../../resource/BTN-theme.svg';
import axios from "axios"
import Section from "../section02"
import Example from "../../resource/masterpiece1_1.png";

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
            width: 1000px;
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
            width: 370px;
            height: 370px;
            margin-top:240px;
        }
    }
    &>div>div:nth-child(3){
        img{
            width: 370px;
            height: 370px;
            margin-top:240px;
        }
    }
    &>div>div:nth-child(4){
        img{
            width: 370px;
            height: 370px;
            margin-top:240px;
        }
    }
    &>div>div:nth-child(5){
        img{
            width: 370px;
            height: 370px;
            margin-top:240px;
        }
    }
    
    
    &>div>div:nth-child(6){
        position:relative;
        img{
            ${theme.BubbleButton}
            margin-top:68px;
        }
        p{
            position:absolute;
            text-align: center;
            font: normal normal bold 55px/52px ${theme.GmarketFontBold};
            letter-spacing: 1.72px;
            color: ${theme.OrangeColor};
            top:108px;
        }
    }
    &>div>div:nth-child(7){
        position:relative;
        img{
            ${theme.BubbleButton}
            margin-top:68px;
        }
        p{
            position:absolute;
            text-align: center;
            font: normal normal bold 55px/52px ${theme.GmarketFontBold};
            letter-spacing: 1.72px;
            color: ${theme.OrangeColor};
            top:108px;
        }
    }
    &>div>div:nth-child(8){
        position:relative;
        img{
            ${theme.BubbleButton}
            margin-top:68px;
        }
        p{
            position:absolute;
            text-align: center;
            font: normal normal bold 55px/52px ${theme.GmarketFontBold};
            letter-spacing: 1.72px;
            color: ${theme.OrangeColor};
            top:108px;
        }
    }
    &>div>div:nth-child(9){
        position:relative;
        img{
            ${theme.BubbleButton}
            margin-top:68px;
        }
        p{
            position:absolute;
            text-align: center;
            font: normal normal bold 55px/52px ${theme.GmarketFontBold};
            letter-spacing: 1.72px;
            color: ${theme.OrangeColor};
            top:108px;
        }
    }
    &>div>div:nth-child(10){
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
            imgSrc1: theme.DefaultImgSrc,
            imgSrc2: theme.DefaultImgSrc,
            imgSrc3: theme.DefaultImgSrc,
            imgSrc4: theme.DefaultImgSrc
        }
    }

    componentDidMount() {
        this.callAPI();
    }
    callAPI = async () => {
        var img;
        try {
            img = await axios.get('https://test.com/', {
                params: {
                    img: this.props.cameraImg,
                    masterpiece: this.props.masterpiece
                }
            });
        }
        catch (error) {
            img = {
                "imgSrc1" : Example,
                "imgSrc2" : Example,
                "imgSrc3" : Example,
                "imgSrc4" : Example,
            }
        }
        this.setState({
            imgSrc1:img.imgSrc1,
            imgSrc2:img.imgSrc2,
            imgSrc3:img.imgSrc3,
            imgSrc4:img.imgSrc4
        })
    }


    content() {
        return (
            <ContentStyle>
                <Grid container>
                    <Grid item xs={12}>
                        <div></div>
                        <h1>[{this.props.masterpiece}] 선택하였습니다</h1>
                    </Grid>
                    <Grid container xs={3}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <img src={this.state.imgSrc1} alt="#"></img>
                    </Grid>
                    <Grid container xs={3}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <img src={this.state.imgSrc2} alt="#"></img>
                    </Grid>
                    <Grid container xs={3}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <img src={this.state.imgSrc3} alt="#"></img>
                    </Grid>
                    <Grid container xs={3}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <img src={this.state.imgSrc4} alt="#"></img>
                    </Grid>

                    <Grid container xs={3}
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <img src={BTN1} alt="#" onClick={() => { this.props.setPageNum("8"); this.props.setResultImg(this.state.imgSrc1)}} />
                        <p>1</p>
                    </Grid>
                    <Grid container xs={3}
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <img src={BTN1} alt="#" onClick={() => { this.props.setPageNum("8"); this.props.setResultImg(this.state.imgSrc1) }} />
                        <p>2</p>
                    </Grid>
                    <Grid container xs={3}
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <img src={BTN1} alt="#" onClick={() => { this.props.setPageNum("8"); this.props.setResultImg(this.state.imgSrc1) }} />
                        <p>3</p>
                    </Grid>
                    <Grid container xs={3}
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <img src={BTN1} alt="#" onClick={() => { this.props.setPageNum("8"); this.props.setResultImg(this.state.imgSrc1) }} />
                        <p>4</p>
                    </Grid>
                </Grid>
            </ContentStyle>
        )
    }

    backButton() {
        return (
            <img src={backSvg} alt="#" onClick={() => this.props.setPageNum("6")} />
        )
    }
    render() {
        return (
            <Section id="result">
                {this.commonSection()}
            </Section>
        )
    }
}

export default Page;


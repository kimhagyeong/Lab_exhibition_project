import SuperPage from "./B_Camera"
import styled from "styled-components";
import theme from "../theme";
import Grid from '@material-ui/core/Grid';
import backSvg from "../../resource/BTN-18.svg"
import BTN1 from '../../resource/BTN-theme.svg';
import axios from "axios"
import Section from "../section02"
import Example from "../../resource/DICE.png";
import Video from "./test.mp4";

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
            object-fit: cover;
            width: 296px;
            height: 370px;
            margin-top:240px;
        }
    }
    &>div>div:nth-child(3){
        img{
            object-fit: cover;
            width: 296px;
            height: 370px;
            margin-top:240px;
        }
    }
    &>div>div:nth-child(4){
        img{
            object-fit: cover;
            width: 296px;
            height: 370px;
            margin-top:240px;
        }
    }
    &>div>div:nth-child(5){
        img{
            object-fit: cover;
            width: 296px;
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
    #video {
        position:absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width:640px;
        height:480px;
        background-color:#000;
        z-index:300000;
    }
`;
class Page extends SuperPage {
    constructor(props) {
        super(props);
        this.state = {
            currentCount: 5,
            imgSrc1: [Example],
            imgSrc2: [Example],
            imgSrc3: [Example],
            imgSrc4: [Example]
        }
    }

    offVideo() {
        if(document.getElementById('player')){
            document.getElementById('player').pause();
        }
       
        if(document.getElementById('video')){
            document.getElementById('video').style.display = 'none';
        }
        
    }
      
    componentDidMount() {
        // this.intervalId = setInterval(this.timer.bind(this), 1000);
        this.callAPI();
    }

    callAPI = async () => {
        var result;
        try {
            var aid = theme.Masterpiecelist.indexOf(this.props.masterpiece);
            result = await axios.get(theme.BackendServer+'cv/'+String(aid));
            result = result.data;
            this.offVideo();
        }
        catch (error) {
            result = [Example,Example,Example,Example]
            this.offVideo();
        };
        this.setState({
            imgSrc1:[result[0], 0],
            imgSrc2:[result[1], 1],
            imgSrc3:[result[2], 2],
            imgSrc4:[result[3], 3]
        });
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
                        <img src={this.state.imgSrc1[0]} alt="#"></img>
                    </Grid>
                    <Grid container xs={3}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <img src={this.state.imgSrc2[0]} alt="#"></img>
                    </Grid>
                    <Grid container xs={3}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <img src={this.state.imgSrc3[0]} alt="#"></img>
                    </Grid>
                    <Grid container xs={3}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <img src={this.state.imgSrc4[0]} alt="#"></img>
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
                        <img src={BTN1} alt="#" onClick={() => { this.props.setPageNum("8"); this.props.setResultImg(this.state.imgSrc2) }} />
                        <p>2</p>
                    </Grid>
                    <Grid container xs={3}
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <img src={BTN1} alt="#" onClick={() => { this.props.setPageNum("8"); this.props.setResultImg(this.state.imgSrc3) }} />
                        <p>3</p>
                    </Grid>
                    <Grid container xs={3}
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <img src={BTN1} alt="#" onClick={() => { this.props.setPageNum("8"); this.props.setResultImg(this.state.imgSrc4) }} />
                        <p>4</p>
                    </Grid>
                </Grid>
                
                <div id="video">
                    <video id="player" src={Video} type="video/mp4" autoplay="true" width="640px" height="480px">Your browser does not support this streaming content.</video>
                </div>
                
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


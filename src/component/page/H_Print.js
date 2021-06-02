import SuperPage from "./B_Camera"
import styled from "styled-components";
import theme from "../theme";
import Grid from '@material-ui/core/Grid';
import backSvg from "../../resource/BTN-18.svg"
import nextSvg from "../../resource/BTN-18.svg";
import BTN from "../../resource/BTN-15.svg";
import Section from "../section03";
import axios from "axios";

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
            currentCount: 10
        }
    }
    timer() {
        this.setState({
          currentCount: this.state.currentCount - 1
        })
        if(this.state.currentCount < 1) { 
          clearInterval(this.intervalId);
          this.props.setPageNum("11");
        }
        console.log(this.state.currentCount);
      }
      
    componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), 1000);
        this.callAPI();
    }
    callAPI=async()=>{
        var img = "https://defavoritebucket-resized.s3.amazonaws.com/popup/마음터치우주_오베르교회.jpg"
        try{
            img = await axios.get('https://test.com/', {
                params: {
                img:this.props.cameraImg,
                mode:this.props.mode,
                numAI:this.props.numAI
                }
            });
        }
        catch(error){
            img = "https://defavoritebucket-resized.s3.amazonaws.com/popup/SecitonUiD_우주나비_1_09_232159.png"
        }
        this.props.setResultImg(img);
    }
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    content() {
        return (
            <ContentStyle>
                <Grid container>
                    <Grid item xs={12}>
                        <div></div>
                        <h1>완성된 사진입니다. 어떠신가요?<br />{this.state.currentCount}초 후 인쇄를 진행합니다.</h1>
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
                        <img src={BTN} alt="#" onClick={() => this.props.setPageNum("4")}/>
                    </Grid>
                </Grid>
            </ContentStyle>
        )
    }

    backButton(){
        return(
            <img src={backSvg} alt="#" onClick={() => this.props.setPageNum("4")} />
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


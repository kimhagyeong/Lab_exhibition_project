import SuperPage from "./B_Camera"
import styled from "styled-components";
import theme from "../theme";
import Grid from '@material-ui/core/Grid';
import backSvg from "../../resource/BTN-18.svg"
import nextSvg from "../../resource/BTN-18-2.svg";
import BTN from "../../resource/BTN-15.svg";
import Section from "../section03";
import axios from "axios"

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
            width:auto;
            height: 225px;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            display:block;
            margin-top:0px;
            &>img{
                width:auto;
                height:225px;
                transform: rotate(270deg);
                // margin-top:0px;
                // margin-left:-50px;
            }
        }
        img{
            width: auto;
            height: 300px;
            display:block;
            margin-bottom:0px;
            margin-left:auto;
            margin-right:auto;
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
            width: auto;
            max-height: 637px;
        }
    }
    &>div>div:nth-child(4){
        img{
            ${theme.BubbleButton}
            margin-top:60px;
        }
    }
`;
class Page extends SuperPage {
    constructor(props) {
        super(props);
        this.state = {
            currentCount: 7
        }
    }
    timer() {
        this.setState({
            currentCount: this.state.currentCount - 1
        })
        if (this.state.currentCount === 3) {
            this.callAPI();
        }
        if (this.state.currentCount < 1) {
            clearInterval(this.intervalId);
            this.props.setPageNum("9");
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    callAPI = async () => {
        var result=theme.DefaultImgSrc;
        try {
            var aid = theme.Masterpiecelist.indexOf(this.props.masterpiece)
            result = await axios.get(theme.BackendServer+'cp/'+String(aid)+String(this.props.resultImg[1]));
            result= result.data
            console.log("api 요청 받음");
        }
        catch (error) {
            console.log("api 요청 실패");
        };
        this.setState({printimg:result});
        this.props.setResultImg([result])
    }


    content() {
        return (
            <ContentStyle>
                <Grid container>
                    <Grid item xs={12}>
                        <div></div>
                        <h1>완성된 사진입니다. 어떠신가요?<br />{this.state.currentCount}초 후 인쇄를 진행합니다.</h1>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container
                            direction="column"
                            justify="space-between"
                            alignItems="center">
                            <div><img src={this.props.cameraImg} alt="#" /></div>
                            <img src={theme.Masterpieces[this.props.masterpiece]} alt="#"></img>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={nextSvg} alt="#" />
                        <img src={this.props.resultImg[0]} alt="#"></img>
                    </Grid>
                    <Grid item xs={12}>
                        <img src={BTN} alt="#" onClick={() => this.props.setPageNum("6")} />
                    </Grid>
                </Grid>
            </ContentStyle>
        )
    }

    backButton() {
        return (
            <img src={backSvg} alt="#" onClick={() => this.props.setPageNum("7")} />
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


import SuperPage from "./B_Camera"
import styled from "styled-components";
import theme from "../theme";
import Grid from '@material-ui/core/Grid';
import backSvg from "../../resource/BTN-18.svg"
import BTN1 from '../../resource/BTN-12.svg';
import BTN2 from '../../resource/BTN-13.svg';
import BTN3 from '../../resource/BTN-14.svg';
import axios from "axios"
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
            ${theme.BubbleButton}
            margin-top:68px;
        }
    }
    &>div>div:nth-child(9){
        img{
            ${theme.BubbleButton}
            margin-top:68px;
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
class Page extends SuperPage{
    constructor(props) {
        super(props);
        this.state = {
            imgSrc1:theme.CategoryImg["1"],
            imgSrc2:theme.CategoryImg["2"],
            imgSrc3:theme.CategoryImg["3"]
        }
    }

    componentDidMount() {
        this.callAPI();
    }
    callAPI=async()=>{
        var img = theme.CategoryImg["1"];
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
        // this.setState({
        //     imgSrc1:img,
        //     imgSrc2:img,
        //     imgSrc3:img
        // })
    }


    content() {
        return (
            <ContentStyle>
                <Grid container>
                    <Grid item xs={12}>
                        <div></div>
                        <h1>[{theme.ArtistArts[this.props.mode][this.props.numAI-1]}] 선택하였습니다</h1>
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
                        <img src={this.state.imgSrc3} alt="#"></img>    
                    </Grid>

                    <Grid container xs={3}
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <img src={BTN1} alt="#" onClick={()=>{this.props.setPageNum("8")}}/>
                    </Grid>
                    <Grid container xs={3}
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <img src={BTN2} alt="#" onClick={()=>{this.props.setPageNum("8")}}/>
                    </Grid>
                    <Grid container xs={3}
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <img src={BTN3} alt="#" onClick={()=>{this.props.setPageNum("8")}}/>
                    </Grid>
                    <Grid container xs={3}
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <img src={BTN3} alt="#" onClick={()=>{this.props.setPageNum("8")}}/>
                    </Grid>
                </Grid>
            </ContentStyle>
        )
    }

    backButton(){
        return(
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


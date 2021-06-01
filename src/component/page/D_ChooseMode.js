import SuperPage from './B_Camera';
import styled from "styled-components";
import theme from "../theme";
import Grid from '@material-ui/core/Grid';
import BTN1 from '../../resource/BTN-04.svg';
import BTN2 from '../../resource/BTN-05.svg';
import backSvg from "../../resource/BTN-18.svg"
import Section from "../section01";

const ContentStyle = styled.div`
    width:1390px;
    height:100%;
    &>div>div{
        text-align:center;
    }
    &>div>div:nth-child(1){
        text-align:center;
        padding-top:30px;
        &>div{
            width: 590px;
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
            width: 508px;
            height: 730px;
            border-radius:254px / 365px;
            margin-top:70px;
        }
    }
    &>div>div:nth-child(3){
        img{
            width: 508px;
            height: 730px;
            border-radius:254px / 365px;
            margin-top:70px;
        }
    }
    &>div>div:nth-child(4){
        img{
            ${theme.BubbleButton}
            margin-top:30px;
        }
    }
    &>div>div:nth-child(5){
        img{
            ${theme.BubbleButton}
            margin-top:30px;
        }
    }
`;

class Page extends SuperPage{
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
      }
    componentWillUnmount(){
    }
  
    content() {
        return (
            <ContentStyle>
                <Grid container>
                    <Grid item xs={12}>
                        <div></div>
                        <h1>어떤 스타일을 원하시나요?</h1>
                    </Grid>
                    <Grid container xs={6}
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        <img src="https://defavoritebucket-resized.s3.amazonaws.com/popup/hyun_gum_IMG_3164_2020-02-12_091133.6554680000.JPG" alt="#"></img>
                    </Grid>
                    <Grid container xs={6}
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        <img src="https://defavoritebucket-resized.s3.amazonaws.com/popup/hyun_gum_IMG_3164_2020-02-12_091133.6554680000.JPG" alt="#"></img>
                    </Grid>
                    <Grid container xs={6}
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        <img src={BTN1} alt="#" onClick={() => this.props.setPageNum("5")}/>
                    </Grid>
                    <Grid container xs={6}
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        <img src={BTN2} alt="#" onClick={() => this.props.setPageNum("7")}/>
                    </Grid>

                </Grid>
            </ContentStyle>
        )
    }

    backButton(){
        return(
            <img src={backSvg} alt="#" onClick={() => this.props.setPageNum("2")}/>
        )
    }
    render() {
        return (
            <Section id="chooseMode">
                {this.commonSection()}
            </Section>
        )
    }
}

export default Page;

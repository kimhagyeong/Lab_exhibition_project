import SuperPage from './page2';
import styled from "styled-components";
import theme from "../theme";
import Grid from '@material-ui/core/Grid';
import BTN1 from '../../resource/BTN-04.svg';
import BTN2 from '../../resource/BTN-05.svg';
import backSvg from "../../resource/BTN-18.svg"

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
            margin-top:20px;
        }
    }
    &>div>div:nth-child(3){
        img{
            width: 508px;
            height: 730px;
            border-radius:254px / 365px;
            margin-top:20px;
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

    content() {
        return (
            <ContentStyle>
                <Grid container>
                    <Grid item xs={12}>
                        <div></div>
                        <h1>어떤 스타일을 원하시나요?</h1>
                    </Grid>
                    <Grid item xs={6}
                        alignItems="center"
                    >
                        <img src="https://defavoritebucket-resized.s3.amazonaws.com/popup/hyun_gum_IMG_3164_2020-02-12_091133.6554680000.JPG" alt="#"></img>
                    </Grid>
                    <Grid item xs={6}
                        alignItems="center"
                    >
                        <img src="https://defavoritebucket-resized.s3.amazonaws.com/popup/hyun_gum_IMG_3164_2020-02-12_091133.6554680000.JPG" alt="#"></img>
                    </Grid>
                    <Grid item xs={6}
                        alignItems="center"
                    >
                        <img src={BTN1} alt="#" />
                    </Grid>
                    <Grid item xs={6}
                        alignItems="center">
                        <img src={BTN2} alt="#" />
                    </Grid>

                </Grid>
            </ContentStyle>
        )
    }

    backButton(){
        return(
            <img src={backSvg} alt="#" />
        )
    }
}

export default Page;

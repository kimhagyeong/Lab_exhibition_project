import SuperPage from './page2';
import styled from "styled-components";
import BTN from '../../resource/BTN-03.svg'
import theme from "../theme";
import Grid from '@material-ui/core/Grid';

const ContentStyle = styled.div`
    width:1390px;
    height:100%;
    background-color:${theme.OrangeColor};
    h1{
        text-align: center;
        font: normal normal bold 56px/67px ${theme.GmarketFontBold};
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;   
    }
    h1:nth-child(1){
        margin:87px 0px 70px 0px;
    }
    h1:nth-child(3){
        margin-top:90px;
        position:relative;
        & > img{
            width:100px;
            height:100px;
            position:absolute;
            top:-15px;
            left:208px;
        } 
    }
    &>div>div{
        width: 650px;
        height: 650px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid #707070;
        opacity: 1;
    }
    img{
        ${theme.BubbleButton}
        margin-top:40px;
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
                <Grid
                    container
                    direction="column"
                    justify="space-around"
                    alignItems="center"
                >
                    <h1>카메라는 아래쪽에 있습니다</h1>
                    <div>
                        {/* camera */}
                    </div>
                    <img src={BTN} alt="#"/>
                </Grid>
            </ContentStyle>
        )
    }
}

export default Page;

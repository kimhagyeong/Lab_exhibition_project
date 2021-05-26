import SuperPage from './page2';
import styled from "styled-components";
import theme from "../theme";
import Grid from '@material-ui/core/Grid';

const ContentStyle = styled.div`
    width:1390px;
    height:100%;
    background-color:${theme.OrangeColor};
    h1{
        text-align: center;
        font: normal normal normal 47px/53px  ${theme.GmarketFontMedium};
        letter-spacing: 0px;
        color: #F4F4F4;
        opacity: 1;  
        margin:63px 0px 66px 0px; 
    }
    &>div>div{
        width: 565px;
        height: 764px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid #707070;
        opacity: 1;
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
                    <h1>인쇄가 완료되었습니다.<br/>N초 후 메인화면으로 이동합니다.</h1>
                    <div>
                        {/* camera */}
                    </div>
                </Grid>
            </ContentStyle>
        )
    }
}

export default Page;

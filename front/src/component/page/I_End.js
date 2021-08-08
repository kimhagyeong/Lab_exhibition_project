import SuperPage from './B_Camera';
import styled from "styled-components";
import theme from "../theme";
import Grid from '@material-ui/core/Grid';
import Section from "../section01"
import axios from "axios"

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
        // background: #FFFFFF 0% 0% no-repeat padding-box;
        // border: 1px solid #707070;
        opacity: 1;
        &>img{
            width: 565px;
            max-height: 764px;
            margin-top:50px;
        }
    }
    
`;
class Page extends SuperPage {
    constructor(props) {
        super(props);
        this.state = {
            currentCount: 5,
            // printimg : ''
        };
    }
    timer() {
        this.setState({
          currentCount: this.state.currentCount - 1
        })
        if(this.state.currentCount < 1) { 
          clearInterval(this.intervalId);
          this.props.setPageNum("1");
        }
      }
      
    componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), 1000);
        this.callAPI();
    }
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    callAPI = async () => {
        var result;
        try {
            var aid = theme.Masterpiecelist.indexOf(this.props.masterpiece)
            result = await axios.get(theme.BackendServer+'cp/'+String(aid)+String(this.props.resultImg[1]));
            result= result.data
            console.log("api 요청 받음");
        }
        catch (error) {
            console.log("api 요청 실패");
        };
        // this.setState({printimg:result});
        this.props.setResultImg(result)
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
                    <h1>인쇄가 완료되었습니다.<br/>{this.state.currentCount}초 후 메인화면으로 이동합니다.</h1>
                    <div>
                        <img src={this.props.resultImg} alt="#"/>
                    </div>
                </Grid>
            </ContentStyle>
        )
    }

    render() {
        return (
            <Section id="end">
                {this.commonSection()}
            </Section>
        )
    }
}

export default Page;

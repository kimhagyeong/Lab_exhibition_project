import SuperPage from './B_Camera';
import styled from "styled-components";
import BTN from '../../resource/BTN-03.svg'
import theme from "../theme";
import Grid from '@material-ui/core/Grid';
import Section from "../section01";

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
        &>img{
            max-width:650px;
            max-height:650px;
            margin-top:0px;
        }
    }
    &>div>img{
        ${theme.BubbleButton}
        margin-top:40px;
    }
`;
class Page extends SuperPage {
    constructor(props) {
        super(props);
        this.state = {
            currentCount: 5
        }
    }
    timer() {
        this.setState({
          currentCount: this.state.currentCount - 1
        })
        if(this.state.currentCount < 1) { 
          clearInterval(this.intervalId);
          this.props.setPageNum("4");
        }
        console.log(this.state.currentCount);
      }
      
    componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
    }
    componentWillUnmount(){
    clearInterval(this.intervalId);
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
                    <h1>{this.state.currentCount}초 후에 자동으로 넘어갑니다</h1>
                    <div>
                        {/* camera */}
                        <img src={this.props.cameraImg} alt="#"/>
                    </div>
                    <img src={BTN} alt="#" onClick={() => this.props.setPageNum("2")}/>
                </Grid>
            </ContentStyle>
        )
    }
    render() {
        return (
            <Section id="cameraConfirm">
                {this.commonSection()}
            </Section>
        )
    }
}

export default Page;

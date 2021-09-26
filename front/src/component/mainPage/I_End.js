import SuperPage from './B_Camera';
import styled from "styled-components";
import theme from "../theme";
import Grid from '@material-ui/core/Grid';
import Section from "../section01"

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
            max-width:565px;
            max-height:764px;
        }
    }
    
`;
class Page extends SuperPage {
    constructor(props) {
        super(props);
        this.state = {
            currentCount: 10,
            // printimg : ''
            resultImg:'',
        };
    }
    timer() {
        this.setState({
            currentCount: this.state.currentCount - 1
        })
        if (this.state.currentCount < 1) {
            clearInterval(this.intervalId);
            this.props.setPageNum("1");
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), 1000);

        this.setState({resultImg:this.props.resultImg[0]})
        var printContents = document.createElement('DIV');
        var Content = document.createElement('IMG');
        Content.src = this.props.resultImg[0];
        Content.setAttribute("style", "width:100%; height:100%;");
        printContents.appendChild(Content)
        //width, height 를 조절해서 프린트 사이즈를 조절해보기..
        var windowObject = window.open('/print', "PrintWindow", "width=1080, height=1440, toolbars=no, status=no,scrollbars=no, resizable=no");

        windowObject.document.write(printContents.innerHTML);
        windowObject.focus();
        windowObject.print();
        windowObject.close();

        // windowObject.close(); 
        // setTimeout(() => windowObject.print(), 1000);
    }
    componentWillUnmount() {
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
                    <h1>인쇄가 완료되었습니다.<br/>{this.state.currentCount}초 후 메인화면으로 이동합니다.</h1>
                    <div id="finalImg">
                        <img id="innerImg" src={this.state.resultImg} alt="#" />
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

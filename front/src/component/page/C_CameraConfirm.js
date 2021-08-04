import SuperPage from './B_Camera';
import styled from "styled-components";
import BTN from '../../resource/BTN-03.svg'
import theme from "../theme";
import Grid from '@material-ui/core/Grid';
import Section from "../section01";
// import axios from "axios";
import sampleResultImg from "../../resource/masterpiece1_1.png";

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
        height: 489px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid #707070;
        opacity: 1;
        &>img{
            max-width:650px;
            max-height:650px;
            margin-top:0px;
        }
        margin-bottom: 25px;
        margin-top:20px;
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
            currentCount: 5,
            isGetApi: false,
            isFailApi: false,
        }
    }
    timer() {
        this.setState({
          currentCount: this.state.currentCount - 1,
          apiCount: this.state.apiCount -1,
        })
        if(this.state.isFailApi){
            this.setState({isFailApi: false})
            this.callAPI();
        }
        if(this.state.currentCount < 1) { 
            if(!this.state.isGetApi){ 
                this.setState({
                    currentCount:5,
                })
            }else{
                clearInterval(this.intervalId);
                this.props.setPageNum("4");
            }
        }
    }
      
    componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), 1000);
        this.callAPI();
    }

    callAPI = async () => {
        try {
            // var img = await axios.get('https://test.com/', {
            //     params: {
            //         img: this.props.cameraImg,
            //         masterpiece: this.props.masterpiece
            //     }
            // });
            //imgMap 예시로 만든 거임 위에 axios 살려!
            var imgMap = {
                "리듬들(1934)":sampleResultImg ,
                "삶의 기쁨(1930)":sampleResultImg, 
                "무한리듬(1934)" :sampleResultImg,
                "가죽나막신(1888)": sampleResultImg, 
                "밤의 카페 테라스(1888)" :sampleResultImg, 
                "별이 빛나는 밤에(1889)": sampleResultImg,
                "뮤직(1904)" :sampleResultImg, 
                "채링 크로스 다리(1906)":sampleResultImg, 
                "콜리우르의 보트들(1905)":sampleResultImg,
                "비관론과 낙관론(1923)":sampleResultImg, 
                "원형 비행기(1924)":sampleResultImg, 
                "불꽃놀이(1917)":sampleResultImg,
                "뉴욕(1913)":sampleResultImg, 
                "성직자(1913)":sampleResultImg, 
                "우드니(젊은미국소녀)(1913)": sampleResultImg,
                "거울 앞 소녀(1932)":sampleResultImg, 
                "자화상(1901)":sampleResultImg, 
                "la muse(1935)":sampleResultImg
            }
            this.setState({isGetApi:true});
            this.props.setMasterpieceResultImg(imgMap);
            console.log("api 요청 받음");
        }
        catch (error) {
            this.setState({
                isFailApi : true,
            })
            console.log("api 요청 실패");
        }
        
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
                    <h1>로딩 중..<br />{this.state.currentCount}초 후에 자동으로 넘어갑니다</h1>
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

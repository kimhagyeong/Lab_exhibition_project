import SuperPage from './B_Camera';
import styled from "styled-components";
import BTN from '../../resource/BTN-03.svg'
import theme from "../theme";
import Grid from '@material-ui/core/Grid';
import Section from "../section01";
import axios from "axios";
import Loading from '../Loading'

const ContentStyle = styled.div`
    width:1390px;
    height:100%;
    background-color:${theme.OrangeColor};
   
    &>div{
        width:100%;
        height:100%;
    }

    &>div>div:nth-child(1){
        text-align:center;
        &>div{
            width: 600px;
            height: 450px;
            opacity: 1;
            text-align : center;
            margin-top:20px;
            overflow: hidden;
            transform: rotate(270deg);     
            border-radius: 10px;
            box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
            &>div{
                margin-top:75px;
                &>img{
                    transform: scale(1.3333);  
                    transition: all .2s ease-in-out;
                    width:600px;
                    margin: -75px 0px -100px 0px;                    
                }
            }
        }
    }
    
    &>div>div:nth-child(2){
        &>img{
            ${theme.BubbleButton}
            margin-top:40px;
        }
    }

    &>div>div:nth-child(3){
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .resultAPI>div{
        text-align : center;
        margin-top:35px;
        & >img{
            width:300px;
        }
    }
    
    .resultAPI>div:nth-child(1){
        &>div{
            width: 679px;
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
    .blind {
        position:absolute;
        top:20px;
        left:20px;
        width: 100px;
        height: 100px;
    }
`;
class Page extends SuperPage {
    constructor(props) {
        super(props);
        this.state = {
            isGetApi:false,
            babyFaceList: [
                theme.DefaultImgSrc,
                theme.DefaultImgSrc,
                theme.DefaultImgSrc,
                theme.DefaultImgSrc
            ],
            testState: 0,
        }
    }


    componentDidMount() {
        this.callMasterpieceAPI();
    }

    callMasterpieceAPI = async () => {
        
        try {
            ////////////////

            const formData = new FormData();
            formData.append("img", this.props.cameraImg);
            this.state.isGetApi = true
            var img = await axios({
                method: "post",
                url: theme.BackendServer + 'cs',
                data: formData,
                headers: { "Content-Type": "multipart/form-data" }
            });

            img = img.data['data']

            var imgMap = {
                "리듬들(1934)": img[0],
                "삶의 기쁨(1930)": img[1],
                "무한리듬(1934)": img[2],
                "가죽나막신(1888)": img[3],
                "밤의 카페 테라스(1888)": img[4],
                "별이 빛나는 밤에(1889)": img[5],
                "뮤직(1904)": img[6],
                "채링 크로스 다리(1906)": img[7],
                "콜리우르의 보트들(1905)": img[8],
                "비관론과 낙관론(1923)": img[9],
                "원형 비행기(1924)": img[10],
                "불꽃놀이(1917)": img[11],
                "뉴욕(1913)": img[12],
                "성직자(1913)": img[13],
                "우드니(젊은미국소녀)(1913)": img[14],
                "거울 앞 소녀(1932)": img[15],
                "자화상(1901)": img[16],
                "la muse(1935)": img[17]
            };
            await this.props.setMasterpieceResultImg(imgMap);

            ////////////////
            // var imgMap = {
            //     "리듬들(1934)": theme.DefaultImgSrc,
            //     "삶의 기쁨(1930)": theme.DefaultImgSrc,
            //     "무한리듬(1934)": theme.DefaultImgSrc,
            //     "가죽나막신(1888)": theme.DefaultImgSrc,
            //     "밤의 카페 테라스(1888)": theme.DefaultImgSrc,
            //     "별이 빛나는 밤에(1889)": theme.DefaultImgSrc,
            //     "뮤직(1904)": theme.DefaultImgSrc,
            //     "채링 크로스 다리(1906)": theme.DefaultImgSrc,
            //     "콜리우르의 보트들(1905)": theme.DefaultImgSrc,
            //     "비관론과 낙관론(1923)": theme.DefaultImgSrc,
            //     "원형 비행기(1924)": theme.DefaultImgSrc,
            //     "불꽃놀이(1917)": theme.DefaultImgSrc,
            //     "뉴욕(1913)": theme.DefaultImgSrc,
            //     "성직자(1913)": theme.DefaultImgSrc,
            //     "우드니(젊은미국소녀)(1913)": theme.DefaultImgSrc,
            //     "거울 앞 소녀(1932)": theme.DefaultImgSrc,
            //     "자화상(1901)": theme.DefaultImgSrc,
            //     "la muse(1935)": theme.DefaultImgSrc
            // };
            // await this.props.setMasterpieceResultImg(imgMap);
            ///////////////
            if (this.state.isGetApi) {
                this.props.setPageNum("4");
            }
        }
        catch (error) {
            console.log(error);
        }

    }

    content() {
        return (
            <ContentStyle>
                <Grid
                    container
                    direction="column"
                    justify="space-evenly"
                    alignItems="center"
                >
                    <Grid item>
                        <div>
                            {/* camera */}
                            <div>
                                <img src={this.props.cameraImg} alt="#" />
                            </div>
                        </div>``
                    </Grid>
                        
                    <Grid draggable="false" item>
                        <img draggable="false" src={BTN} alt="#" onClick={() => { this.state.isGetApi=false
                                                                    this.props.setPageNum("2");}} />
                    </Grid>

                    <Grid item >
                        {/* {!this.state.isGetApi ?
                            // 주석을 해제해서 두 로딩 스타일을 비교해보세요
                            <div className="loader-div">
                                <div className="loader"></div>
                            </div>
                            // <Loading></Loading>
                            : null
                        } */}
                        <div className="loader-div">
                                <div className="loader"></div>
                        </div>
                    </Grid>
                </Grid>
                <div class="blind"></div>
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

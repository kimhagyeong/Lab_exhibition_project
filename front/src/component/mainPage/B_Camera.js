import React, { Component } from 'react';
import styled from "styled-components";
import theme from "../theme";
import Grid from '@material-ui/core/Grid';
import arrowSvg from "../../resource/BTN-02.svg";
import homeSvg from "../../resource/BTN-19.svg"
import Section from "../section01";
import Webcame from "../webcam.js";

const ContentStyle = styled.div`
    width:1390px;
    height:100%;
    background-color:${theme.OrangeColor};
    h1{
        text-align: center;
        font: normal normal bold 47px/55px ${theme.GmarketFontBold};
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;   
    }
    h1:nth-child(1){
        margin:30px 0px 20px 0px;
    }
    h1:nth-child(3){
        margin-top:65px;
        position:relative;
        & > img{
            width:100px;
            height:100px;
            position:absolute;
            top:-15px;
            left:168px;
        } 
    }
    &>div>div{
        width: auto;
        height: 720px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid #707070;
        opacity: 1;
    }
`;

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    timer() {
      this.setState({
        currentCount: this.state.currentCount - 1
      })
      if(this.state.currentCount < 1) { 
        clearInterval(this.intervalId);
        this.props.setPageNum("3");
      }
    }

    content() {
        return (
            <ContentStyle>
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="center"
                >
                    <h1>카메라는 아래쪽에 있습니다 <br/>화면을 클릭하면 찰칵!</h1>
                    <div>
                        <Webcame 
                            setCameraImg={this.props.setCameraImg}
                            setPageNum={this.props.setPageNum}>
                        </Webcame>
                    </div>
                    <h1>여기를&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={arrowSvg} alt="#" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;보세요</h1>
                </Grid>
            </ContentStyle>
        )
    }

    backButton() {
        return (
            <>
            </>
        )
    }

    commonSection() {
        return(
            <>
                <div>
                    <img src={homeSvg} alt="#"  onClick={() => {this.props.setPageNum("1"); this.props.reset();}}/>
                    <h2>AI Photographer</h2>
                    {this.backButton()}
                </div>
                {this.content()}
                <div>
                    <h2>KOREATECH 30TH X DICE</h2>
                </div>
            </>
        )
    }

    render() {
        return (
            <Section id="camera">
                {this.commonSection()}
            </Section>
        )
    }
}

export default Page;

import React, { Component } from 'react';
import styled from "styled-components";
import theme from "../theme";
import Grid from '@material-ui/core/Grid';
import arrowSvg from "../../resource/BTN-02.svg";
import homeSvg from "../../resource/BTN-19.svg"
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
    }
`;

class Page extends Component {
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
                    justify="flex-start"
                    alignItems="center"
                >
                    <h1>카메라는 아래쪽에 있습니다</h1>
                    <div>
                        {/* camera 
                            this.props.setCameraImg("blabla image src");
                        */}
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
                    <a href="#home" onClick={this.props.reset}><img src={homeSvg} alt="#" /></a>
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

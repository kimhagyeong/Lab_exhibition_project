import React, { Component } from 'react';
import styled from "styled-components";
import theme from "../theme"
import Grid from '@material-ui/core/Grid';
import BTN from '../../resource/BTN-01.svg'
import Image1 from '../../resource/page1_1.png';
import Image2 from '../../resource/page1_2.png';

const Section = styled.section`
    background-color:${theme.OrangeColor};

    &>div>div:nth-child(1){
        height:900px
    }
    &>div>div:nth-child(2){
        height:900px;
    }
    img{
        width: 510px;
        height: 510px;
        margin-top:102px;
    }
    h2{
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
        font: normal normal bold 5vh/6.01851vh ${theme.GmarketFontBold};
        margin:90px 0 47px 0;
    }
    p{
        letter-spacing: 0px;
        color: ${theme.LightWhiteColor};
        opacity: 1;
        font: normal normal 2.8903vh/3.7037vh ${theme.GmarketFontLight};
        text-align: center;
        margin:0;
    }

    &>div>div:nth-child(3){
        height:192px;
        text-align:center;
        & > img{
            ${theme.BubbleButton}
            margin-top:0;
        }
    }
`;

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <Section>
                <Grid container>
                    <Grid xs={6} container
                    direction="column"
                    justify="flex-start"
                    alignItems="center"
                  >
                        <img src={Image1} alt="#"></img>
                        <h2>화가의 채색을 입혀드립니다</h2>
                        <p>AI를 이용하여 작품에 대한 전반적인<br />질감과 색을 학습해 입혀드립니다</p>
                    </Grid>
                    <Grid xs={6} container
                    direction="column"
                    justify="flex-start"
                    alignItems="center">
                        <img src={Image2} alt="#"></img>
                        <h2>화가의 화풍을 입혀드립니다</h2>
                        <p>AI를 이용하여 작가에 대한 전반적인<br />드로잉 특성을 학습해 입혀드립니다</p>

                    </Grid>
                    <Grid item xs={12}>
                        <img src={BTN} alt="#"/>
                    </Grid>
                </Grid>
            </Section>
        )
    }
}

export default Page;

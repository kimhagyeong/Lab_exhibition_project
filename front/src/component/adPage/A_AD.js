import React, { Component } from 'react';
import theme from "../theme"
import Section from './A_AD_css.js';
import SampleImg01 from '../../resource/sampleMaster_1.png'
import SampleImg02 from '../../resource/sampleMaster_2.png'
import AD_video from '../mainPage/test.mp4'

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSrc :[
                theme.DefaultImgSrc,
                theme.DefaultImgSrc,
                theme.DefaultImgSrc,
                theme.DefaultImgSrc,
                theme.DefaultImgSrc,
                theme.DefaultImgSrc,
                theme.DefaultImgSrc,
                theme.DefaultImgSrc,
                theme.DefaultImgSrc,
                theme.DefaultImgSrc
            ],
            imgOrigin:[
                theme.DefaultImgSrc,
                theme.DefaultImgSrc,
                theme.DefaultImgSrc,
                theme.DefaultImgSrc,
                theme.DefaultImgSrc,
                theme.DefaultImgSrc,
                theme.DefaultImgSrc,
                theme.DefaultImgSrc,
                theme.DefaultImgSrc,
                theme.DefaultImgSrc
            ],
            timer:5,
            resetTimer:50,
            clickImgNum : 0,
            clickImgOriginNum:0,
            pageImgs : 10,
        }
    }
    
    componentDidMount(){
        // var mobileBody = document.querySelector('.ipad');
        // mobileBody.style.backgroundImage = `url('${AD_video}')`;

        document.querySelector('.workspace').classList.add('active');
        this.intervalId = setInterval(this.timer.bind(this), 1000);
        this.callAPI();
        this.changeImg();
    }


    timer=async()=> {
        var timer = this.state.timer -1;
        var resetTimer = this.state.resetTimer-1;
        if(timer === 0){
            timer=5;
            if(this.state.clickImgNum>=this.state.imgSrc.length-1){
                await this.setState({
                    clickImgNum:0
                })
            }else{
                await this.setState({
                    clickImgNum:this.state.clickImgNum+1
                })
            }

            if(this.state.clickImgOriginNum>=this.state.imgOrigin.length-1){
                await this.setState({
                    clickImgOriginNum:0
                })
            }else{
                await this.setState({
                    clickImgOriginNum:this.state.clickImgOriginNum+1
                })
            }
        }

        if(resetTimer===0){
            resetTimer=50;
            await this.callAPI();
        }

        this.setState({
            timer : timer,
            resetTimer : resetTimer
        })
        
        this.changeImg();
        
    }


    callAPI = async () => {
        try {
            // var img = await axios.get('https://test.com/', {
            //     params: {
            //     }
            // });
            var img = [
                SampleImg01,
                SampleImg02,
                SampleImg01,
                SampleImg02,
                SampleImg01,
                SampleImg02,
                SampleImg01,
                SampleImg02,
                SampleImg01,
                SampleImg02,

                SampleImg01,
                SampleImg02,
                SampleImg02,
                SampleImg02,
                SampleImg02,
                SampleImg02,
                SampleImg02,
                SampleImg02,
                SampleImg02,
                SampleImg02,

                SampleImg01,
                SampleImg01,
                SampleImg01,
                SampleImg02
            ]

        }
        catch (error) {
            console.log("api 요청 실패");
        }
        await this.setState({
            imgOrigin:img,
        })
        this.splitImgOrigin();
    }

    splitImgOrigin(){
        if(this.state.clickImgOriginNum%10===0){
            var startNum = this.state.clickImgOriginNum;
            var endNum = this.state.clickImgOriginNum+9;
            if(endNum >= this.state.imgOrigin.length){
                endNum = this.state.imgOrigin.length-1;
                startNum = this.state.imgOrigin.length-10;
            }
            var img = [];
            for(var i=startNum;i<=endNum;i++){
                img.push(this.state.imgOrigin[i]);
            } 
            this.setState({
                imgSrc : img,
                clickImgOriginNum:startNum
            })        
        }
    }

    changeImg(){
        var mobileBody = document.querySelector('.iphone');
        mobileBody.style.backgroundImage = `url('${this.state.imgSrc[this.state.clickImgNum]}')`;
    }

    render() {
        return (
            <Section id="AD">
                <div class="workspace">
                    <div class="bg-content"></div>
                    <div class="mobile-body ipad">
                        <video loop="loop" autoplay="autoplay" muted="muted">
                            <source src={AD_video} type="video/mp4"/>
                        </video>
                        <div class="camera"></div>
                        <div class="button volume-down"></div>
                        <div class="layer-2"></div>
                        <div class="layer-1"></div>
                    </div>
                    <div class="mobile-body iphone">
                        <div class="top-bar">
                            <div class="camera"></div>
                            <div class="speaker"></div>
                        </div>
                        <div class="button volume-up"></div>
                        <div class="button volume-down"></div>
                        <div class="button silent"></div>
                        <div class="button power"></div>
                        <div class="layer-2"></div>
                        <div class="layer-1"></div>
                    </div>

                    <div class="gallery-content">
                        <div class={this.state.clickImgNum===0?"gallery-content__img active":"gallery-content__img"}
                            data-img={this.state.imgSrc[0]}>
                            <img alt="#"  src={this.state.imgSrc[0]} rel="preload" />
                        </div>
                        <div class={this.state.clickImgNum===1?"gallery-content__img active":"gallery-content__img"}
                            data-img={this.state.imgSrc[1]}>
                            <img alt="#"  src={this.state.imgSrc[1]} rel="preload" />
                        </div>
                        <div class={this.state.clickImgNum===2?"gallery-content__img active":"gallery-content__img"}
                            data-img={this.state.imgSrc[2]}>
                            <img alt="#"  src={this.state.imgSrc[2]} rel="preload" />
                        </div>
                        <div class={this.state.clickImgNum===3?"gallery-content__img active":"gallery-content__img"}
                            data-img={this.state.imgSrc[3]}>
                            <img alt="#"  src={this.state.imgSrc[3]} rel="preload" />
                        </div>
                        <div class={this.state.clickImgNum===4?"gallery-content__img active":"gallery-content__img"}
                            data-img={this.state.imgSrc[4]}>
                            <img alt="#"  src={this.state.imgSrc[4]} rel="preload" />
                        </div>

                        <div class={this.state.clickImgNum===5?"gallery-content__img active":"gallery-content__img"}
                            data-img={this.state.imgSrc[5]}>
                            <img alt="#"  src={this.state.imgSrc[5]} rel="preload" />
                        </div>
                        <div class={this.state.clickImgNum===6?"gallery-content__img active":"gallery-content__img"}
                            data-img={this.state.imgSrc[6]}>
                            <img alt="#"  src={this.state.imgSrc[6]} rel="preload" />
                        </div>
                        <div class={this.state.clickImgNum===7?"gallery-content__img active":"gallery-content__img"}
                            data-img={this.state.imgSrc[7]}>
                            <img alt="#"  src={this.state.imgSrc[7]} rel="preload" />
                        </div>
                        <div class={this.state.clickImgNum===8?"gallery-content__img active":"gallery-content__img"}
                            data-img={this.state.imgSrc[8]}>
                            <img alt="#"  src={this.state.imgSrc[8]} rel="preload" />
                        </div>
                        <div class={this.state.clickImgNum===9?"gallery-content__img active":"gallery-content__img"}
                            data-img={this.state.imgSrc[9]}>
                            <img alt="#"  src={this.state.imgSrc[9]} rel="preload" />
                        </div>
                    </div>
                </div>
            </Section>
        )
    }
}

export default Page;
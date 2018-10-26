import React, {Component} from 'react';
import {Carousel} from 'antd';
import BannerPic1 from './images/banner/banner-1.png';
import BannerPic2 from './images/banner/banner-2.png';
import BannerPic3 from './images/banner/banner-3.png';
import BannerPic4 from './images/banner/banner-4.png';
import './conent.scss'

const sliderArray = [{
    imageURL: BannerPic1,
    redirectURL: '',
    desc: ''
}, {
    imageURL: BannerPic2,
    redirectURL: '',
    desc: ''
}, {
    imageURL: BannerPic3,
    redirectURL: '',
    desc: ''
},{
    imageURL: BannerPic4,
    redirectURL: '',
    desc: ''
}];



class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const sliderList = sliderArray.map((elem, index) => {
            return (<div key={index}>
                <a href={elem.redirectURL}>
                    <img src={elem.imageURL} width="100%" alt=""/>
                    <div className="desc">{elem.desc}</div>
                </a>
            </div>);
        });
        return (
            <div className="slider_wrapper" id={'slider'}>
                <Carousel effect="scrollx" autoplay autoplaySpeed={2500}
                          pauseOnHover={true}>
                    {sliderList}
                </Carousel>
            </div>
        );
    };
}

export default Slider;

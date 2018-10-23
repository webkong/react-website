import React, {Component} from 'react';
import {Carousel} from 'antd';
import './conent.scss'

const sliderArray = [{
    imageURL: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538559649&di=d64d7c9098ed1ad8a0785649565ab5b3&imgtype=jpg&er=1&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fb%2F55597435bb036.jpg',
    redirectURL: '',
    desc: (
        <p style={{fontSize: '30px', float: 'left'}}>我是测试文案</p>
    )
}, {
    imageURL: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538559628&di=1fa1e15f8ce23c22ca22932059f5f3da&imgtype=jpg&er=1&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fb7fd5266d01609242404d97bd50735fae6cd34a8.jpg',
    redirectURL: '',
    desc: (
        <p style={{fontSize: '30px', float: 'right'}}>我也是测试文案</p>
    )
}, {
    imageURL: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538559662&di=0bfd456635b69dd8f84824a3f60bee0d&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.jinriweidu.com%2Fuploads%2Fallimg%2F170214%2F1-1F214013238.jpg',
    redirectURL: '',
    desc: (
        <p style={{fontSize: '30px'}}>我也是测试文案</p>
    )
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

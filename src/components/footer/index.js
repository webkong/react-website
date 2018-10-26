/*
* Create by wangsw on 2018/10/23
*/

import React, {Component} from 'react';
import './footer.scss'
import scan from './images/logo.png';


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="footer_wrapper">
                <div className="about">
                    <p className="title">关于页控科技</p>
                    <p className="desc">
                        关于页控-页控科技是由一个工作室慢慢发展而来，汇聚诸多技术大拿，一群志同道合的有志（中二）青年，致力于让传播更简单、更广泛、依赖于平台更超越界限。
                    </p>
                    <p className="desc">
                        从2013年到2017年，页控科技已经累计服务10w+，积累了诸多：小程序、小游戏、H5等多种形式的传播方式，更是支持私人化定制，从需求到方案，从方案到实施，精准定位。
                    </p>
                </div>
                <div className="linkUs">
                    <img src={scan} width={'100%'} alt=""/>
                </div>
            </div>
        )
    }


}

export default Index;

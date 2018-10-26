/*
* Create by wangsw on 2018/9/27
*/

import React, {Component} from 'react';
import {Icon, Row, Col} from 'antd'

const flow = [{
    id: 'requirement',
    title: '需求确认',
    icon: 'user'
}, {
    id: 'development',
    title: '项目实施',
    icon: 'solution'
}, {
    id: 'tests',
    title: '流程测试',
    icon: 'bars'
}, {
    id: 'deployment',
    title: '部署上线',
    icon: 'smile-o'
}, {
    id: 'data report',
    title: '数据报告',
    icon: 'bar-chart'
}];

class Process extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 6
        };
    }

    componentDidMount() {
        // this.timerID = setInterval(
        //     () => this.tick(),
        //     2000
        // );
    }

    tick() {
        if (this.state.current >= 5) {
            this.setState({
                current: 0
            });
        } else {
            let current = this.state.current + 1;
            this.setState({
                current
            });
        }

    }

    render() {
        const {current} = this.state;
        const list = flow.map((elem, index) => {
            return (
                <Col span={12} key={index}>
                    <div className="step" >
                        <div className="num">
                            {index + 1}
                        </div>
                        <div className="title">
                            <div className="h4">{(elem.id).toUpperCase()}</div>
                            <div className="h5">{elem.title}</div>
                        </div>
                        <div className="desc">


                        </div>
                    </div>
                </Col>
            )
        });
        return (
            <div className="process_wrapper" id={'process'}>
                <div className="process">

                    <div className="steps">

                        <Col span={8}>
                            <div className="title">
                                <div className={'h2'}>PROCESS</div>
                                <div className={'h3'}>服务流程</div>
                            </div>
                        </Col>
                        <Row type="flex" justify="space-between" align="middle">

                            {list}
                        </Row>
                    </div>


                </div>
            </div>
        );
    }


}

export default Process;

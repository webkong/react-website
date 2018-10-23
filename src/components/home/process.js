/*
* Create by wangsw on 2018/9/27
*/

import React, {Component} from 'react';
import {Steps, Icon, Row} from 'antd'

const {Step} = Steps;
const flow = [{
    id: 1,
    title: '需求确认',
    icon: 'user'
}, {
    id: 2,
    title: '项目实施',
    icon: 'solution'
}, {
    id: 3,
    title: '流程测试',
    icon: 'bars'
}, {
    id: 4,
    title: '部署上线',
    icon: 'smile-o'
}, {
    id: 5,
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
        const list = flow.map((elem) => {
            return (
                <Step key={elem.id} title={elem.title} icon={<Icon type={elem.icon}/>}/>
            )
        });
        return (
            <div className="process_wrapper pager" id={'#process'}>
                <div className="process">
                    <div className="title">
                        <h2>服务流程</h2>
                    </div>
                    <Row type="flex" justify="space-around" align="middle">

                        <Steps labelPlacement="vertical" current={current}>
                            {list}
                        </Steps>
                    </Row>

                </div>
            </div>
        );
    }


}

export default Process;

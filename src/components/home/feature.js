import React, {Component} from 'react';
import {Row, Col, Icon} from 'antd';
import './conent.scss';

const list = [
    {id: 1, name: '高效极速', icon: 'thunderbolt', color: '#db672e', desc: '快速构建，高效开发，极速浏览'},
    {id: 2, name: '私人订制', icon: 'rocket', color: '#1DA57A', desc: '我们有丰富的经验，超高的用户满意度，让您的私人订制更专业，更量身'},
    {id: 3, name: '只要你想', icon: 'cloud', color: '#1890ff', desc: '我们有强大的团队，支持丰富的H5、小程序、轻应用等各种形式'},
    {id: 4, name: '7X24', icon: 'phone', color: '#eb2f96', desc: '一直在您身边，聆听需求，快速响应'}
];

class Feature extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const featureList = list.map((elem, index) => {
            return (
                <Col span={4} key={index}>
                    <div className="item">
                        <div className="icon">
                            <Icon type={elem.icon} theme="twoTone" twoToneColor={elem.color}/>
                        </div>
                        <p className="name">{elem.name}</p>

                        <p className="desc">
                            {elem.desc}
                        </p>
                    </div>
                </Col>)
        });
        return (
            <div className="feature_wrapper pager" id={'feature'}>
                <div className="title">
                    <div className="h2">Why we are</div>
                    <div className={'h3'}>为什么选择页控</div>
                </div>
                <Row type="flex" justify="space-between" align="middle">

                    {featureList}
                </Row>
            </div>
        )
    }


}

export default Feature;

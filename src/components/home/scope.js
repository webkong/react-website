import React, {Component} from 'react';
import {Row, Col, Icon} from 'antd';
import './conent.scss';

const list = [
    {id: 1, name: '高效极速', icon: 'thunderbolt', color: '#db672e', desc: '快速构建，高效开发，极速浏览'},
    {id: 2, name: '私人订制', icon: 'rocket', color: '#1DA57A', desc: '我们有丰富的经验，超高的用户满意度，让您的私人订制更专业，更量身'},
    {id: 3, name: '只要你想', icon: 'cloud', color: '#1890ff', desc: '我们有强大的团队，支持丰富的H5、小程序、轻应用等各种形式'},
    {id: 4, name: '7X24', icon: 'phone', color: '#eb2f96', desc: '一直在您身边，聆听需求，快速响应'}
];

class Scope extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const scopeList = list.map((elem, index) => {
            return (
                <Col span={5} key={index}>
                    <div className="item">

                        <p className="name">{elem.name}</p>
                        <div className="icon">
                            <Icon type={elem.icon} theme="twoTone" twoToneColor={elem.color}/>
                        </div>
                        <p className="desc">
                            {elem.desc}
                        </p>
                    </div>
                </Col>)
        });
        return (
            <div className="scope_wrapper pager" id={'scope'}>
                <div className="title">
                    <div className={'h2'}>BUSINESS</div>
                    <div className={'h3'}>业务范围</div>
                </div>
                <Row type="flex" justify="space-between" align="middle">

                    {scopeList}
                </Row>
            </div>
        )
    }


}

export default Scope;

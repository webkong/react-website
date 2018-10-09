/*
* Create by wangsw on 2018/9/27
*/

import React, {Component} from 'react';
import {Tabs} from 'antd';
import './case.scss';
const TabPane = Tabs.TabPane;

class Case extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'top',
        };
    }

    render() {
        const {mode} = this.state;
        return (
            <div className="cases_wrapper">
                <div className="cases">
                    <div className="title">
                        <h2>案例展示</h2>
                    </div>
                    <Tabs
                        defaultActiveKey="1"
                        tabPosition={mode}
                    >
                        <TabPane tab="Tab 1" key="1">
                            <div className="cover">
                                <img src="./images/invate.png" width="100%" alt=""/>
                            </div>
                            <div className="info">
                                <p className="name">3333</p>
                                <p className="desc"></p>
                            </div>
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
                        <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
                        <TabPane tab="Tab 4" key="4">Content of tab 4</TabPane>
                        <TabPane tab="Tab 5" key="5">Content of tab 5</TabPane>
                    </Tabs>

                </div>
            </div>
        )
    }


}

export default Case;

import React, {Component} from 'react';
import {Menu} from 'antd';

const {SubMenu} = Menu;

const NavArray = [{
    key: 'home',
    name: '首页',
    url: '#home'
}, {
    key: 'custom',
    name: '私人订制',
    url: '#custom'
}, {
    key: 'about',
    name: '关于我们',
    url: '#about'
}, {
    key: 'link',
    name: '联系我们',
    url: '#link'
}, {
    key: 'language',
    name: 'English',
    children: [{
        key: 'en',
        name: 'English'
    }, {
        key: 'zh',
        name: '简体中文'
    }]
}];

class Nav extends Component {
    state = {
        current: 'home',
        currentLanguage: {
            key: 'en',
            name: 'English'
        }
    };

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };


    render() {
        // const {NavArray} = this.state;
        const list = NavArray.map((elem) => {
            if (elem.children && elem.children.length > 0) {
                const children = elem.children.map((el) => {
                    return <Menu.Item key={el.key}>{el.name}</Menu.Item>
                });
                return (
                    <SubMenu key="language" title="English" style={{float: 'right'}}>
                        {children}
                    </SubMenu>
                );
            }
            return (
                <Menu.Item key={elem.key}>
                    <a href={elem.url} rel="noopener noreferrer">{elem.name}</a>
                </Menu.Item>
            );
        });
        return (

            <Menu onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  style={{lineHeight: '64px'}}
                  mode="horizontal" theme="dark">
                {list}
            </Menu>

        );
    };
}

export default Nav;

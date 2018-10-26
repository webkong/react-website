import React, {Component} from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom';

const {SubMenu} = Menu;

const NavArray = [{
    key: 'h5',
    name: 'H5制作',
    url: '/h5'
}, {
    key: 'minProgram',
    name: '小程序',
    url: '/minProgram'
}, {
    key: 'minGame',
    name: '小游戏',
    url: '/minGame'
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
}];

const other = {
    key: 'language',
    name: 'English',
    children: [{
        key: 'en',
        name: 'English'
    }, {
        key: 'zh',
        name: '简体中文'
    }]
};

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
            return (
                <Menu.Item key={elem.key}>
                    <Link to={elem.url}>
                        <span>{elem.name}</span>
                    </Link>
                </Menu.Item>
            );
        });
        return (

            <Menu onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  style={{lineHeight: '62px', background: 'rgba(255,255,255,0)', float: 'right', borderBottom: 'none'}}
                  mode="horizontal">
                {list}
            </Menu>

        );
    };
}

export default Nav;

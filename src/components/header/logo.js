/*
* Create by wangsw on 2018/10/23
*/

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LogoImg from './images/logo.png';

class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={{float:'left'}}>
                <Link to="/">
                    <img src={LogoImg}  style={{width:'64px',height:'64px'}} alt=""/>
                    <span style={styles.slogen}>让您的内容传播起来</span>
                </Link>
            </div>
        )
    }


}

const styles = {
    slogen:{
        color: '#01ADEE'
    }
};

export default Logo;

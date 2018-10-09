import React, {Component} from 'react';
import {Layout} from 'antd';
import {Slider, Feature, Process, Case} from  './components/content/index'
import Nav from './components/header/index'
import './App.css';

const {Header, Footer, Content} = Layout;

class App extends Component {
    render() {
        return (
            <div className="App" id={'home'}>
                <Layout>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                        <Nav/>
                    </Header>
                    <Content style={{ padding: '0 0', marginTop: 64 }}>
                        <Slider/>
                        <Feature/>
                        <Process/>
                        <Case/>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        );
    };
}

export default App;

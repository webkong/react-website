import React, {Component} from 'react';
import {Layout, BackTop} from 'antd';
import Home from './components/home/index'
import Head from './components/header/index'
import Foot from './components/footer/index'
import './App.css';
import {Switch, Route} from 'react-router-dom';
import NoMatch from './components/404';
import HTML5 from "./components/h5";

const {Header, Footer, Content} = Layout;

class App extends Component {
    render() {
        return (
            <div className="App" id={'home'}>
                <Layout>
                    <Header style={{
                        position: 'absolute',
                        zIndex: 1,
                        width: '100%',
                        background: 'rgba(255,255,255,1)',
                        overflow: 'hidden'
                    }}>

                        <Head/>
                    </Header>
                    <Content style={{padding: '0 0', marginTop: '64px'}}>
                        <Switch>
                            <Route to="/" exact component={Home}/>
                            <Route to="/h5" component={HTML5}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </Content>
                    <Footer style={{background: 'rgb(14, 14, 14)', height: '290px'}}>
                        <Foot/>
                    </Footer>
                </Layout>
            </div>
        );
    };
}

export default App;

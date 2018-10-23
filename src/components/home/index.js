import React, {Component, Fragment} from 'react';
import Slider from './slider';
import Feature from './feature';
import Scope from './scope';
import Process from './process';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Slider/>
                <Scope/>
                <Process/>
                <Feature/>
            </Fragment>
        )
    }
}

export default Home;

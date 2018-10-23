import React, {Component,Fragment} from 'react';
import Nav from './menu';
import Logo from './logo';


class Head extends Component {


    render() {

        return (

            <Fragment>
                <Logo/>
                <Nav/>
            </Fragment>

        );
    };
}

export default Head;

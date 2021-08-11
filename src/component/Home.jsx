import React, { Component, Fragment } from "react";
import Banner from './Banner'
import Slick from "./Slick"
import Maps from "./Maps";
import 'bootstrap/dist/css/bootstrap.min.css';


class Home extends Component {
    render() {
        return(
            <Fragment>
                <Banner/>
                <Slick/>
                <Maps/>
            </Fragment>
        )
    }
}

export default Home;
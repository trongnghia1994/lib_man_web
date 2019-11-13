import React, { Component } from 'react'
import PropTypes from 'prop-types';
import dummyAction from '../actions/libItem'

class Title extends Component {
    constructor() {
        super();
    }
    render() {        
        return (
            <div>
                <h1>{this.props.libName + " Library"}</h1>
                <h2>{this.props.subTitle}</h2>              
            </div>
        );
    }
}

Title.propTypes = {
    libName: PropTypes.string.isRequired
}

Title.defaultProps = {
    libName: "HCMC National University"
}

export default Title;
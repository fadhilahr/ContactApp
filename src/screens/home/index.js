import React, { Component } from 'react';
import { findAllContact } from '../../action/contact';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'





class HomeScreen extends Component {
    componentDidMount() {
        this.props.findAllContact();
    }

    render() {

    }
}

function mapStateToProps(state) {
    return {
        books: state.findAllContact.data,
        error: state.findAllContact.error
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ findAllContact }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(HomeScreen);
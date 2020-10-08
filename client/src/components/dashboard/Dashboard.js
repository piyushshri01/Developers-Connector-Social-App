import React, { Component } from 'react';
import PropTypes from 'prop-types';

// redux stuff
import { connect } from 'react-redux'
import { getCurrentProfile } from '../redux/actions/profileActions';

class Dashboard extends Component {
    componentDidMount() {
        this.props.getCurrentProfile();
    }
    render() {
        return (
            <div>
                <h1>dashboard</h1>
            </div>
        )
    }
}

export default connect(null, { getCurrentProfile })(Dashboard);

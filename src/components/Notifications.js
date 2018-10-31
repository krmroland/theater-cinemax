import React, { Component } from 'react';
import { connect } from 'react-redux';
class Notifications extends Component {
    render() {
        const { errorMessage, successMessage } = this.props;
        if (!errorMessage && !successMessage) return null;
        //favor errors over success messages
        const message = errorMessage || successMessage;
        const className = errorMessage ? 'alert-danger' : 'alert-primary';

        return (
            <div className={`alert text-center mb-1 ${className}`}>
                {message}
            </div>
        );
    }
}

const mapStateToProps = ({ errorMessage, successMessage }) => ({
    errorMessage,
    successMessage,
});
export default connect(mapStateToProps)(Notifications);

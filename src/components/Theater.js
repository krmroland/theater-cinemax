import React, { Component } from 'react';
import TheaterColumn from './TheaterColumn';
import { connect } from 'react-redux';
class Theater extends Component {
    render() {
        const { theater } = this.props;
        return (
            <div>
                {theater.rows.map(row => (
                    <TheaterColumn theater={theater} row={row} key={row} />
                ))}
            </div>
        );
    }
}
const mapStateToProps = ({ theater }) => ({ theater });
export default connect(mapStateToProps)(Theater);

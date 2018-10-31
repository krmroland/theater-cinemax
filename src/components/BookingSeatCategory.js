import React, { Component } from 'react';
import { connect } from 'react-redux';
import SeatSelector from './SeatSelector';
class BookingSeatCategory extends Component {
    render() {
        let { seatCategory } = this.props;

        return (
            <div className="booking-seat-category">
                {seatCategory && <SeatSelector />}
            </div>
        );
    }
}
const mapStateToProps = ({ seatCategory, availableSeats }) => ({
    seatCategory,
    availableSeats,
});
export default connect(mapStateToProps)(BookingSeatCategory);

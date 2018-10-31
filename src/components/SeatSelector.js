import React, { Component } from 'react';
import { connect } from 'react-redux';
import { categories } from '../config';
import SeatSwitch from './SeatSwitch';
class SeatSelector extends Component {
    render() {
        const { seatCategory, availableSeats } = this.props;
        const { name: seatName } = categories[seatCategory];

        return (
            <div>
                <h4 className="text-center">
                    Available
                    <strong className="text-primary"> {seatName} </strong>
                    Seats
                </h4>
                <div className="d-flex flex-wrap jcc">
                    {availableSeats.map((seat, index) => (
                        <SeatSwitch key={index} seat={seat} />
                    ))}
                </div>
            </div>
        );
    }
}
const mapStateToProps = ({ seatCategory, availableSeats }) => ({
    seatCategory,
    availableSeats,
});

export default connect(mapStateToProps)(SeatSelector);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleSeatBooking, updateErrorMessage } from '../store/actions';
import MultipleSeat from './MultipleSeat';
class SeatSwitch extends Component {
    combineKeys(seats) {
        return seats.map(({ key }) => key).join('');
    }

    getSeatKey() {
        const { seat } = this.props;
        return Array.isArray(seat) ? this.combineKeys(seat) : seat.key;
    }

    addToCart(e) {
        const isAdding = e.currentTarget.checked;

        const {
            seat,
            toggleBooking,
            toBookSeats,
            cart,
            updateErrorMessage,
        } = this.props;

        const bookedSeats = Object.keys(cart).length;
        if (!toBookSeats) {
            return updateErrorMessage(
                'Please select the number of tickets you would want to book'
            );
        }
        if (isAdding && bookedSeats >= toBookSeats) {
            return updateErrorMessage(
                'The number of required seats has already been achieved'
            );
        }
        toggleBooking(seat, this.getSeatKey());
    }
    isChecked() {
        const { cart } = this.props;
        return (
            Object.keys(cart).find(key => key === this.getSeatKey()) || false
        );
    }
    render() {
        return (
            <div className="theater-seat theater-seat-has-switch">
                <MultipleSeat seat={this.props.seat} />
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={this.isChecked()}
                        onChange={this.addToCart.bind(this)}
                    />
                    <span className="slider round" />
                </label>
            </div>
        );
    }
}
const mapStateToProps = ({ cart, toBookSeats }) => ({
    cart,
    toBookSeats,
});
const mapActionsToProps = dispatch => ({
    toggleBooking: (seat, key) => dispatch(toggleSeatBooking(seat, key)),
    updateErrorMessage: error => dispatch(updateErrorMessage(error)),
});
export default connect(
    mapStateToProps,
    mapActionsToProps
)(SeatSwitch);

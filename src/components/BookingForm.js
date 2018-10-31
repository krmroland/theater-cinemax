import React, { Component, Fragment } from 'react';
import CustomInput from './CustomInput';
import { categories } from '../config';
import { connect } from 'react-redux';
import {
    updateSeatCateogry,
    updateToBookSeats,
    processBooking,
} from '../store/actions';
import BookingSummary from './BookingSummary';
class BookingForm extends Component {
    render() {
        return (
            <Fragment>
                <form
                    className="booking-form"
                    onSubmit={this.submit.bind(this)}
                >
                    <CustomInput
                        label="Number of Seats to book"
                        type="select"
                        options={this.props.availableSeats}
                        onChange={this.props.updateToBookSeats}
                    />
                    <CustomInput
                        label="Seat category"
                        type="select"
                        options={this.seatCategories()}
                        onChange={this.props.updateCategory}
                    />
                    <BookingSummary />
                </form>
            </Fragment>
        );
    }

    seatCategories() {
        const results = {};
        Object.keys(categories).forEach(
            category => (results[category] = categories[category].name)
        );
        return results;
    }

    submit(e) {
        e.preventDefault();
        this.props.book();
    }
}

const mapStateToActions = ({ availableSeats, cart }) => ({
    availableSeats: availableSeats.length,
    cart,
});

const mapActionsToProps = dispatch => ({
    updateCategory: value => dispatch(updateSeatCateogry(value)),
    updateToBookSeats: value => dispatch(updateToBookSeats(value)),
    book: () => dispatch(processBooking()),
});
export default connect(
    mapStateToActions,
    mapActionsToProps
)(BookingForm);

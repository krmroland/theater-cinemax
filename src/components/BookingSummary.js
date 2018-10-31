import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import SeatSwitch from './SeatSwitch';
import { categories } from '../config';
class BookingSummary extends Component {
    render() {
        const { cart } = this.props;
        return (
            <Fragment>
                <div className="alert alert-primary mt-1">
                    Total: {this.computeTotal()}
                </div>
                <div>
                    <button className="btn" disabled={this.cantBook()}>
                        Book
                    </button>
                </div>
                <div className="d-flex flex-wrap jcc bg-gray mt-1 booked-seats">
                    {Object.values(cart).map((seat, index) => (
                        <SeatSwitch key={index} seat={seat} />
                    ))}
                </div>
            </Fragment>
        );
    }
    computeTotal() {
        const { cart } = this.props;
        const total = Object.values(cart).reduce((prev, next) => {
            const nextTotal = Array.isArray(next)
                ? categories['twinSeat'].price * 2
                : categories[next.category].price;
            return prev + nextTotal;
        }, 0);
        return total.toLocaleString();
    }
    cantBook() {
        const { cart, toBookSeats } = this.props;
        const bookedSeats = Object.keys(cart).length;
        return !bookedSeats || bookedSeats < toBookSeats;
    }
}
const mapStateToActions = ({ cart, toBookSeats }) => ({ cart, toBookSeats });
export default connect(mapStateToActions)(BookingSummary);

import React, { Component } from 'react';

export default class MultipleSeat extends Component {
    makeSeat() {
        let { seat: seats } = this.props;

        // wrap all seats in an array
        if (!Array.isArray(seats)) {
            seats = [seats];
        }

        return seats.map(seat => <span key={seat.key}>{seat.key}</span>);
    }
    render() {
        return <span className="d-flex multiple-seat">{this.makeSeat()}</span>;
    }
}

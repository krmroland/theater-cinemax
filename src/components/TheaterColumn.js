import React, { Component } from 'react';
import TheaterSeat from './TheaterSeat';
export default class TheaterColumn extends Component {
    makeColumns() {
        const { theater, row } = this.props;
        return theater.columns.map(column => {
            const seat = theater.getSeatInPositon(row, column);
            return <TheaterSeat key={seat.key} seat={seat} />;
        });
    }
    render() {
        return <div className="theater-column">{this.makeColumns()}</div>;
    }
}

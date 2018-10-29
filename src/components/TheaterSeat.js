import React, { Component } from 'react';

export default class TheaterSeat extends Component {
    componentDidMount() {
        console.log(this.props.seat);
    }
    render() {
        const { seat } = this.props;

        return (
            <div className={`theater-seat ${seat.helpers.class}`}>
                <sup className="theater-seat-key">{seat.key}</sup>
                <span className="theater-seat-symbol">{seat.helpers.icon}</span>
            </div>
        );
    }
}

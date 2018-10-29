import React, { Component } from 'react';
import CustomInput from './CustomInput';
export default class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                numberOfSeats: 0,
            },
            errors: {
                numberOfSeats: false,
            },
        };
    }
    render() {
        const { errors } = this.state;
        return (
            <div>
                <form action="">
                    <CustomInput
                        label="Number of Seats"
                        onChange={this.updateValue.bind(this, 'numberOfSeats')}
                        error={errors.numberOfSeats}
                    />
                </form>
            </div>
        );
    }
    updateValue() {}
}

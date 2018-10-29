import React, { Component } from 'react';
import TheaterColumn from './TheaterColumn';
import theater from '../core/Theater';
export default class Theater extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theater,
        };
    }
    componentDidMount() {}
    render() {
        return (
            <div>
                {theater.rows.map(row => (
                    <TheaterColumn theater={theater} row={row} key={row} />
                ))}
            </div>
        );
    }
}

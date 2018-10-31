import Seat from './Seat';
import { createArray } from '../utils';
import chunk from 'lodash/chunk';
class Theater {
    /**
     * Creates an instance of the Theater class
     * @return {Theater}
     */
    constructor() {
        //create 16 rows from A up to P
        this.rows = createArray(16, this.convertNumberToAlphabet);
        this.columns = createArray(20);
        this.bookedSeats = {};
        this.setSeats();
        this.book = this.book.bind(this);
    }
    /**
     * Makes and sets the seats
     */
    setSeats() {
        this.seats = {};
        this.rows.forEach(this.setRowSeats.bind(this));
    }
    /**
     * Sets the seats in a given row
     * @param {String}
     */
    setRowSeats(row) {
        this.columns.forEach(column => {
            const seat = new Seat(row, column);
            this.seats[seat.key] = seat;
        });
    }
    /**
     * Transforms a given number to its corresponding alaphabet (if it exists)
     * @example 1=A,2=B,c=3, .... z=25
     * @param  {Number} number
     * @return {String}
     */
    convertNumberToAlphabet(number) {
        if (!+number || number > 26 || number < 1) {
            throw new Error(`${number} can't be converted to an alphabet`);
        }
        // we can use ASCII to convert numbers to letters
        // since A is 65, we can add 64 to every number
        return String.fromCharCode(number + 64);
    }

    /**
     * Gets a seat located in a given position
     * @param  {String} row
     * @param  {Number} column
     * @return {Seat}
     */
    getSeatInPositon(row, column) {
        return this.seats[row + column];
    }
    /**
     * Gets a seat in an available position
     * @param  {String|Null} category
     * @return {Array}
     */
    getAvailableSeatsForCategory(category) {
        const seats = Object.values(this.seats).filter(seat => {
            //look out for seats in the given category  and those that are not booked
            return (
                seat.category === category &&
                !this.bookedSeats[seat.key] &&
                seat.isAvailable &&
                !seat.isReserved
            );
        });
        return category === 'twinSeat' ? chunk(seats, 2) : seats;
    }
    book(seat) {
        seat.isAvailable = false;
        this.bookedSeats = { ...this.bookedSeats, [seat.key]: seat };
    }
}

export default Theater;

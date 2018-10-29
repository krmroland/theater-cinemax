import Seat from './Seat';

class Theater {
    /**
     * Creates an instance of the Theater class
     * @return {Theater}
     */
    constructor() {
        //create 16 rows from A up to
        this.rows = this.createArray(16, this.convertNumberToAlphabet);
        this.columns = this.createArray(20);
        this.setSeats();
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
     * Creates an array of a given Length
     * @param  {Number}   length
     * @param  {Function|null} callback
     * @return {Array}
     */
    createArray(length, callback = number => number) {
        return Array.from({ length }, (number, index) => callback(++index));
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
}

//export the same instance to all apps
export default new Theater();

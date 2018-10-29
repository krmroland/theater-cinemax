import { categories } from '../config.json';

export default class Seat {
    /**
     * Creates an instance of the Seat class
     * @param  {String} row
     * @param  {Number} column
     * @return {Seat}
     */
    constructor(row, column) {
        this.row = row;
        this.column = column;
        this.isAvailable = true;
        this.isReserved = false;
    }
    /**
     * Gets the seat unique indetifier
     * @return {String}
     */
    get key() {
        return this.row + this.column;
    }

    /**
     * Determines the category seat
     * @return {String|Null}
     */
    get category() {
        const categoryMap = {
            isTwinSeat: 'twinSeat',
            isVeryVip: 'veryVip',
            isVip: 'vip',
            isEconomy: 'economy',
        };

        const key = Object.keys(categoryMap).find(method => this[method]);
        return categoryMap[key];
    }
    /**
     * Determines if a given seat is a twin seat
     * @return {Boolean}
     */
    get isTwinSeat() {
        return (
            (this.row === 'A' || this.row === 'B') &&
            (this.column >= 5 && this.column <= 15)
        );
    }
    /**
     * Determines if a given seat is `Very VIP`
     * @return {Boolean}
     */
    get isVeryVip() {
        return (
            (!this.twinSeat && (this.row === 'A' || this.row === 'B')) ||
            (this.row >= 'C' && this.row <= 'F')
        );
    }
    /**
     * Determines if a given seat is vip
     * @return {Boolean}
     */
    get isVip() {
        return this.row >= 'G' && this.row <= 'L';
    }
    /**
     * Determine if a give seat is Economy
     * @return {Boolean}
     */
    get isEconomy() {
        return this.row >= 'M' && this.row <= 'P';
    }
    /**
     * Gets the price of the seat
     * @return {Number}
     */
    get price() {
        return this.getCurrentCategoryProp('price');
    }
    /**
     * Gets the seat label
     * @return {String}
     */
    get label() {
        return this.getCurrentCategoryProp('name');
    }
    /**
     * Gets the class and icon based on the seat status
     * @return {Object}
     */
    get helpers() {
        if (this.isAvailable) return { class: 'available', icon: '*' };

        if (this.isReserved) return { class: 'reserved', icon: 'o' };

        return { class: 'booked', icon: '#' };
    }
    /**
     * Gets a given property of the current category
     * @param  {String} prop
     * @return {String|Number}
     */
    getCurrentCategoryProp(prop) {
        return this.category && categories[this.category][prop];
    }
    /**
     * Reserves or un reserves a given seat
     * @param  {Boolean} value
     * @return {Seat}
     */
    reserve(value = true) {
        this.isAvailable = !value;
        this.isReserved = value;
        return this;
    }
    /**
     * Sets the isAvaliable status of a seat
     * @param {Boolean} value
     */
    setAvailable(value = true) {
        this.isAvailable = value;
        return this;
    }
    /**
     * Books the current seat
     * @return {Seat}
     */
    book() {
        this.isReserved = false;
        this.isAvailable = false;
        return this;
    }
}

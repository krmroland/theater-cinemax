import TheaterCore from '../../core/Theater';
import types from '../actions/types';

const Theater = new TheaterCore();

const initialState = {
    theater: Theater,
    errorMessage: '',
    successMessage: '',
    toBookSeats: 0,
    seatCategory: null,

    cart: {},
    availableSeats: Object.keys(Theater.seats),
};
class AppReducer {
    /**
     * Creates an instance of the reducer class
     * @return {AppReducer}
     */
    constructor() {
        this.state = initialState;
    }
    /**
     * Sets the state
     * @param {Object|null} state
     */
    setState(state) {
        if (state) {
            //time to clear all messages
            this.state = { ...state, errorMesssage: '', successMessage: '' };
        }
        return this;
    }
    /**
     * Returns the next state
     * @param  {Mixed} payload
     * @return {Object} The next state object
     */
    nextState(payload) {
        //all action types exist on this class ,so  we will spin through them
        //unitll we get our first match and trigger it if we dont find any match
        //we will return the initial state which is what the swith does!
        const { type } = payload;

        for (let method in types) {
            if (types[method] === type && this[method]) {
                //we return the default state if the method returns nothing
                return this[method](payload) || this.state;
            }
        }
        return this.state;
    }
    /**
     * Updates the number of seats to be booked
     * @param  {Object} payload
     * @return {Object}
     */
    updateToBookSeats(payload) {
        return { ...this.state, toBookSeats: +payload.value };
    }
    /**
     * Updates the seat category
     * @param  {Object} payload
     * @return {Object}
     */
    updateSeatCateogry(payload) {
        const { category } = payload;

        return {
            ...this.state,
            seatCategory: category,
            availableSeats: Theater.getAvailableSeatsForCategory(category),
        };
    }
    /**
     * Toggles a given seat to and from the cart
     * @param  {Object} payload
     * @return {Object}
     */
    toogleSeatBooking(payload) {
        const { cart } = this.state;
        const { key, seat } = payload;

        cart[key] ? delete cart[key] : (cart[key] = seat);
        return { ...this.state, cart: { ...cart } };
    }
    /**
     * Updates the error mesage
     * @param  {Object} payload
     * @return {Object}
     */
    updateErrorMessage(payload) {
        const { error } = payload;
        return { ...this.state, errorMessage: error };
    }
    /**
     * Process the current items in the booking cart
     * @return {Object}
     */
    processBooking() {
        const { cart } = this.state;
        Object.values(cart).forEach(seat => {
            Array.isArray(seat)
                ? seat.forEach(Theater.book)
                : Theater.book(seat);
        });
        return {
            ...initialState,
            cart: {},
            successMessage: 'Booking was successfully processed',
        };
    }
}
const reducer = new AppReducer();

export default (state, payload) => {
    return reducer.setState(state).nextState(payload);
};

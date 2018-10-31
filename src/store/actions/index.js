import types from './types';
export const updateSeatCateogry = category => ({
    type: types['updateSeatCateogry'],
    category,
});

export const updateToBookSeats = value => ({
    type: types['updateToBookSeats'],
    value,
});

export const toggleSeatBooking = (seat, key) => ({
    type: types['toogleSeatBooking'],
    seat,
    key,
});

export const updateErrorMessage = error => ({
    type: types['updateErrorMessage'],
    error,
});

export const processBooking = () => ({ type: types['processBooking'] });

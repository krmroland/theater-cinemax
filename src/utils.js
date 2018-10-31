/**
 * Creates an array of a given Length
 * @param  {Number}   length
 * @param  {Function|null} callback
 * @return {Array}
 */
export const createArray = (length, callback = number => number) =>
    Array.from({ length }, (number, index) => callback(++index));

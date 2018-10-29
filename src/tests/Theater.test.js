import Theater from '../core/Theater';
import Seat from '../core/Seat';

test('It correcyly sets the rows', () => {
    expect(Theater.rows.length).toBe(16);
    expect(Theater.rows).toEqual(expect.arrayContaining(['A', 'B', 'C']));
    expect(Theater.rows).toEqual(expect.arrayContaining(['M', 'N', 'O', 'P']));
});

test('It correcyly sets the columns', () => {
    expect(Theater.columns.length).toBe(20);
});

test('It converts a given number to its alpahabet ', () => {
    expect(Theater.convertNumberToAlphabet(1)).toBe('A');
    expect(Theater.convertNumberToAlphabet(26)).toBe('Z');
    expect(() => Theater.convertNumberToAlphabet(28)).toThrow(
        "28 can't be converted to an alphabet"
    );
});
test('It sets the seats', () => {
    expect(Theater.seats['A1']).toBeInstanceOf(Seat);
    expect(Theater.convertNumberToAlphabet(26)).toBe('Z');
});

test('It gets a seat in the given position', () => {
    expect(Theater.getSeatInPositon('A', 1).key).toBe('A1');
});

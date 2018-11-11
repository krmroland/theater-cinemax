import Theater from "../../core/Theater";
import Seat from "../../core/Seat";
const theater = new Theater();
test("It correcyly sets the rows", () => {
    expect(theater.rows.length).toBe(16);
    expect(theater.rows).toEqual(expect.arrayContaining(["A", "B", "C"]));
    expect(theater.rows).toEqual(expect.arrayContaining(["M", "N", "O", "P"]));
});

test("It correcyly sets the columns", () => {
    expect(theater.columns.length).toBe(20);
});

test("It converts a given number to its alpahabet ", () => {
    expect(theater.convertNumberToAlphabet(1)).toBe("A");
    expect(theater.convertNumberToAlphabet(26)).toBe("Z");
    expect(() => theater.convertNumberToAlphabet(28)).toThrow(
        "28 can't be converted to an alphabet"
    );
});
test("It sets the seats", () => {
    expect(theater.seats["A1"]).toBeInstanceOf(Seat);
    expect(theater.convertNumberToAlphabet(26)).toBe("Z");
});

test("It gets a seat in the given position", () => {
    expect(theater.getSeatInPositon("A", 1).key).toBe("A1");
});

import Seat from '../core/Seat';

test('Seat correctyle sets the key', () => {
    const seat = new Seat('A', 1);
    expect(seat.key).toBe('A1');
});

test('Seat has the right category', () => {
    expect(new Seat('A', 1).category).toBe('veryVip');
    expect(new Seat('A', 6).category).toBe('twinSeat');
    expect(new Seat('B', 15).category).toBe('twinSeat');

    expect(new Seat('C', 17).category).toBe('veryVip');
    expect(new Seat('F', 10).category).toBe('veryVip');
    expect(new Seat('G', 18).category).toBe('vip');
    expect(new Seat('L', 15).category).toBe('vip');
    expect(new Seat('P', 1).category).toBe('economy');
    expect(new Seat('M', 20).category).toBe('economy');
});

test('it correctly reserves a seat', () => {
    const seat = new Seat('P', 16);
    seat.reserve();
    expect(seat.isReserved).toBeTruthy();
    expect(seat.isAvailable).toBeFalsy();
    seat.reserve(false);
    expect(seat.isReserved).toBeFalsy();
});
test('it can books a seat', () => {
    const seat = new Seat('P', 16);
    seat.book();
    expect(seat.isReserved).toBeFalsy();
    expect(seat.isAvailable).toBeFalsy();
});

test('it correctly sets the helper classes and icons', () => {
    const seat = new Seat('P', 16);
    seat.reserve();
    expect(seat.helpers).toEqual(
        expect.objectContaining({ class: 'reserved', icon: 'o' })
    );
    seat.book();
    expect(seat.helpers).toEqual(expect.objectContaining({ class: 'booked' }));
    seat.setAvailable();
    expect(seat.helpers).toEqual(
        expect.objectContaining({ class: 'available' })
    );
});

test('it correctly sets the seat label', () => {
    expect(new Seat('A', 1).label).toBe('Very VIP');
});

test('it correctly gets the seat price', () => {
    //vvip
    expect(new Seat('A', 1).price).toBe(100000);
    //vip
    expect(new Seat('G', 18).price).toBe(50000);
    //twin seat
    expect(new Seat('A', 6).price).toBe(25000);
    //eoconomy
    expect(new Seat('P', 6).price).toBe(20000);
});

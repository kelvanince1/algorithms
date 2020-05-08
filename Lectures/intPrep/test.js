const { Set } = require('./Set');

const empty = new Set();

const one = new Set();

test('Calling on an empty Set returns true', () => {
    expect(empty.hasValues()).toEqual(false || 0);
});

test('Adding a value produces an array containing the value', () => {
    expect(one.add(1)).toEqual([1]);
    expect(one.add(2)).toEqual([1,2]);
});

test('Value is contained in array', () => {
    const two = new Set();
    two.add(1);
    two.add(2);
    expect(one.contains(1)).toEqual(true);
    expect(one.contains(2)).toEqual(true);
    expect(one.contains(3)).toEqual(false);
});

test('Value can be removed', () => {
    const two = new Set();
    two.add(1);
    two.add(2);
    two.delete(1)
    expect(one.delete(1)).toEqual([2]);
});
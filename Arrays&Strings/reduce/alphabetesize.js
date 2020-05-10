const arr = ['a', 'b', 'z'];

arr.reduce((curr, item) => {
    return (curr < item) ? curr : item;
});
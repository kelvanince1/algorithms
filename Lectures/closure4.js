const arr = [1,2,3,4];

for (let j = 0; j < arr.length; j++) {
    setTimeout(function() {
        console.log('Index: ', + j);
    }, 3000);
}

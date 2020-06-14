function calculateZeroes(n) {
    let factorialN = 1;
    let counter;
    
    for (let i = 2; i <= n; i++) {
        factorialN = factorialN * i;
    }

    console.log(factorialN);
    
    let stringedNum = factorialN.toString();
    counter = stringedNum.length;

    for (let ele of stringedNum) {
        if (ele !== '0') {
            counter = 0;
        }

        if (ele === '0') {
            counter++;
        }
    }
    
    return counter;
}
var lemonadeChange = function(bills) {
    let five = 0;
    let ten = 0;

    for (let ele of bills) {
        if (ele === 5) {
            five++;
        } else if (ele === 10) {
            ten++;
            five--;
        } else if (ten > 0) {
            ten--;
            five--;
        } else {
            five -= 3;
        }

        if (five < 0) {
            return false;
        }
    }
    return true;
}

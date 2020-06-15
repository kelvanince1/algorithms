// Convert a non-negative integer to its english words representation. 
// Given input is guaranteed to be less than 231 - 1.

// Example 1:

// Input: 123
// Output: "One Hundred Twenty Three"
// Example 2:

// Input: 12345
// Output: "Twelve Thousand Three Hundred Forty Five"
// Example 3:

// Input: 1234567
// Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
// Example 4:

// Input: 1234567891
// Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"


function intToEnglish(num) {
    return helper(num);
}

function helper(num) {
    const nots = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
    const teens = ["", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "Ten", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    let result = '';
    
    switch(true) {
        case num < 11:
            result = nots[num];
            break;
        case num < 20:
            result = teens[num - 10];
            break;
        case num < 100:
            result = `${tens[Math.floor(num / 10)]} ${helper(num % 10)}`;
            break;
        case num < 1000:
            result = `${nots[Math.floor(num / 100)]} hundred ${helper(num % 100)}`;
            break;
        case num < 10000:
            result = `${nots[Math.floor(num / 1000)]} thousand ${helper(num % 1000)}`;
            break;
        case num < 1000000:
            result = `${helper(Math.floor(num/1000))} thousand ${helper(num%1000)};`;
            break;
    }
    
    return result;
}
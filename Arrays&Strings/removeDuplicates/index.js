const arr = [1,2,3,1,2,3];

const uniqueArr = new Set(arr);

const backToArr = [...uniqueArr];


OR

Array.from(new Set(arr));



arr.filter((item, index) => {
  return arr.indexOf(item) === index;
})

OR

arr.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []);

const result = [];
for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i) {
        result.push(arr[i]);
    }
}

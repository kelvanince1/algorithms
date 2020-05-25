// colors = ["red", "blue", "green", "yellow"];
// and a string


// str = "Lorem ipsum dolor sit amet";
// write a function that prints each letter of the string in
// different colors. ex. L is red, o is blue, r is green, e is yellow,
// m is red, after the space, i should be blue.

function letterColor(str) {
    let idx = 0;
    const colors = ['red', 'blue', 'green', 'yellow'];
    
    for (let ele of str) {
        if (ele === ' ') {
            document.write(ele);
            continue;
        }
        
        if (idx >= colors.length) {
            idx = 0;
        }
        
        ele = ele.fontcolor(colors[idx]);
        idx++;
        document.write(ele);
    }
}
function traverseBF(fn) {
    const parent = document.body.children[0];
    const result = [parent];

    while (result.length) {
        const node = result.shift();

        result.push(...node.children);
        fn(node);
    }

	return result;
}


const arr = [];

this.traverseBF(node => {
    arr.push(node.classname);
});

// This assumes the following index.html file:

// <!DOCTYPE html>
// <html lang="en" dir="ltr">
//   <head>
//     <meta charset="utf-8">
//     <title></title>
//   </head>
//   <body>
//     <div class="letters">
//       <div class="a">
//         <span class="aa">
//         </span>
//         <span class="aaa">
//         </span>
//       </div>
//       <div class="b">
//         <span class="bb">
//         </span>
//         <span class="bbb">
//         </span>
//       </div>
//     </div>
//   </body>
// </html>

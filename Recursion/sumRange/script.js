function sumRangeRecursive(n, total=0) {
    if (n <= 0) {
        return total;
    }

    return sumRangeRecursive(n - 1, total + n);
}


const tree = {
    name: 'John',
    children: [
        {
            name: 'Sara',
            children: [ { name: 'Pete', children: [] } ]
        },
        {
            name: 'Joe',
            children: [ { name: 'Carla', children: []} ]
        },
        {
            name: 'Dave',
            children: [ { name: 'Casey', children: []} ]
        }
    ],
}


function printChildrenRecursive(tree) {
    if (tree.children.length === 0) {
        return;
    }

    tree.children.forEach((child) => {
        console.log(child.name);
        printChildrenRecursive(child);
    });
}
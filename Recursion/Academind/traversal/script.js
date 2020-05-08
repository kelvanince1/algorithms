const filesystem = {
    documents: {
        files: ['tax.txt', 'resume.pdf', 'picture.png']
    },
    work: {
        urgent: {
            files: ['project-b.pdf']
        },
        lowPrio: {
            files: ['budget.xlsx']
        }
    }
}

function getFileNames(fs) {
    const allFiles = [];

    for (let id in fs) {
        if (Array.isArray(fs[id])) {
            allFiles.push(...fs[id]);
        } else {
            allFiles.push(...getFileNames(fs[id]));
        }
    }

    return allFiles;
}

console.log(getFileNames(filesystem));
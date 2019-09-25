function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; i++) {
            if (arr[j] > arr[j + 1]) {
                // Swap numbers
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

const numbers = [99, 44, 6, 2, 4, 7, 5, -5, 0, 285];
// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity 
// should be O(log (m+n)).

// You may assume nums1 and nums2 cannot be both empty.

// Example 1:

// nums1 = [1, 3]
// nums2 = [2]

// The median is 2.0
// Example 2:

// nums1 = [1, 2]
// nums2 = [3, 4]

// The median is (2 + 3)/2 = 2.5


function medianSortedArrs(arr1, arr2) {
    if (arr2.length > arr1.length) {
        return medianSortedArrs(arr2, arr1);
    }
    
    const x = arr1.length;
    const y = arr2.length;
    
    let low = 0;
    let high = x;
    
    while (low <= high) {
        let partitionX = (low + high) / 2 | 0,
            partitionY = (x + y + 1) / 2 - partitionX | 0;
        
        let xLeft = partitionX === 0 ? -Infinity : arr1[partitionX - 1];
        let xRight = partitionX === x ? Infinity : arr1[partitionX];
        
        let yLeft = partitionY === 0 ? -Infinity : arr2[partitionY - 1];
        let yRight = partitionY === y ? Infinity : arr2[partitionY];
        
        if(xLeft <= yRight && yLeft <= xRight) {
            if((x + y) & 1) return Math.max(xLeft, yLeft);
            return (Math.max(xLeft, yLeft) + Math.min(xRight, yRight)) / 2;
        } else if(xLeft > yRight) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }
}
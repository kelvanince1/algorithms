// Compare two JavaScript arrays and remove duplicates

function removeDuplicates(arr1, arr2) {
  const arro = [];
  arro = arr1.filter(function(val) {
    return arr2.indexOf(val) == -1;
  });
  return arro;
}

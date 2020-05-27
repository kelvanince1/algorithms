function balancePoints(array) {
    if (!Array.isArray(array)) {
      return [];
    }
  
    var totalSum = array.reduce((prev, curr) => {
      return prev + curr;
    });
    
    var leftSum = 0;
  
    return array.reduce(function(points, current, i) {
      if (i > 0) {
          leftSum += array[i-1];
      }
     
      var rightSum = totalSum - leftSum - current;
      console.log('RIGHT SUM', rightSum);
      if (leftSum === rightSum) {
        points.push(i);
      }
  
      return points;
    }, []);
  }
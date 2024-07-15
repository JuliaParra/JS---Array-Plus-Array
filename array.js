export function arrSum(arr1, arr2) {
    
    let totalSum = 0;
    
   
    for (let i = 0; i < arr1.length; i++) {
        totalSum += arr1[i];
    }
    
    
    for (let i = 0; i < arr2.length; i++) {
        totalSum += arr2[i];
    }
    
    
    return totalSum;
}


console.log(arrSum([1, 2, 3], [4, 5, 6]));       
console.log(arrSum([-1, -2, -3], [-4, -5, -6]));
console.log(arrSum([0, 0, 0], [4, 5, 6])); 
console.log(arrSum([100, 200, 300], [400, 500, 600])); 

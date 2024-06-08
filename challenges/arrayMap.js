function hasSubarrayWithSum(arr, target) {
    let currentSum = 0;
    let start = 0;
    
    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];
        
        // While currentSum is greater than the target, move the start pointer to the right
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }
        
        // Check if the currentSum is equal to the target
        if (currentSum === target) {
            return true;
        }
    }
    
    return false;
}

// Example usage:
let arr = [4, 2, 7, 1, 9, 5];
let target = 17;
console.log(hasSubarrayWithSum(arr, target)); // Output: true

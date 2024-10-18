// Given an integer array nums and an integer k, 
// return the k most frequent elements. 
// You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

var topKFrequent = function(nums, k) {
    const frequencyMap = new Map();
    
    // Step 1: Count frequencies using a map
    for (let num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Step 2: Create a bucket array where index is frequency, and value is a list of elements with that frequency
    const bucket = Array(nums.length + 1).fill().map(() => []);
    
    for (let [num, freq] of frequencyMap) {
        bucket[freq].push(num);
    }

    // Step 3: Collect the top k frequent elements from the bucket
    const result = [];
    for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
        if (bucket[i].length > 0) {
            result.push(...bucket[i]);
        }
    }

    return result.slice(0, k);  // Return only k elements
};

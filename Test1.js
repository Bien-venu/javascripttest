function findPairSums(nums1, nums2, k) {
    function findRotationIndex(arr) {
        let left = 0, right = arr.length - 1;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] > arr[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }

    function getSortedArrayFromRotation(arr, rotationIndex) {
        return [...arr.slice(rotationIndex), ...arr.slice(0, rotationIndex)];
    }

    const rotationIndex1 = findRotationIndex(nums1);
    const rotationIndex2 = findRotationIndex(nums2);
    const sortedNums1 = getSortedArrayFromRotation(nums1, rotationIndex1);
    const sortedNums2 = getSortedArrayFromRotation(nums2, rotationIndex2);

    let result = [];
    let left = 0;
    let right = sortedNums2.length - 1;

    while (left < sortedNums1.length && right >= 0) {
        const sum = sortedNums1[left] + sortedNums2[right];
        if (sum === k) {
            result.push([sortedNums1[left], sortedNums2[right]]);
            left++;
            right--;
        } else if (sum < k) {
            left++;
        } else {
            right--;
        }
    }
    return result;
}

let nums1 = [4, 5, 6, 7, 0, 1];
let nums2 = [3, 9, 10, 11, 12, 19];
let k = 13;

console.log(findPairSums(nums1, nums2, k)); 

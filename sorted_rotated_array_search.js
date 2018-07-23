/* Rotated Sorted Array
 * Conceptual - say you're given a sorted array which has been rotated on a pivot value unknown to you
 * such that the elements after the pivot are sliced off the end of the array and prepended to the beginning
 * thus, leaving you with an array which is sorted given the correct starting point and allowing a wrap-around to the beginning of the array
 *
 * Devise a way to efficiently search for a value in this kind of array
 *
 * Note: This only works for arrays which do not have duplicates
 * Algo:
 * 1. Select the mid point (low + high / 2)
 * 2. Once you select a mid point, it must be the case that either the LHS or RHS segment is sorted because
 * of the requirement that the array be sorted. At least one must be sorted (sometimes both may be, but that doesn't matter)
 * 3. Test to see which segment is sorted (by checking the start and ends of each segment).
 * 4. Once you determine which side is sorted, you can check the search value and see if is
 * in that sorted segment's range.
 *    If it is then adjust the high to mid - 1
 *    If it isn't then adjust the low to mid + 1
 *    Repeat this process with the new smaller segment
 *    Stop if low ever exceeds high, at which point, this means that the value was not found
 *
 * Time Complexity => O(logn), as this is just a variant of binary search
 */

function rotatedArraySearch(arr, val){
  let low = 0;
  let high = arr.length - 1;
  let mid;

  while(low <= high){
    mid = Math.floor((low + high)/2);

    // Check if mid is the value
    if(arr[mid] === val){
      return mid;
    }

    //Check if left is sorted
    if(arr[low] <= arr[mid-1]){
      //if the value is in the left segment's range, discard the right segment
      if(val >= arr[low] && val <= arr[mid-1]){
        high = mid - 1;
      //else discard the left segment
      } else {
        low = mid + 1;
      }
    //else the right is sorted, since one side must be sorted by definition
    } else {
      // if the search val is in the right segment's range
      if(val >= arr[mid+1] && val <= arr[high]){
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

let myArr = [5,6,7,8,1,2,3,4];
var res = rotatedArraySearch(myArr, 7);
console.log('res is ', res);


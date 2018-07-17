/* Conceptual - if you have a sorted array with repeated values and you want to find the location
 * of the first or last occurence of some value X, you can use a variant of binary search to find it
 * Algo for first occurence:
 * 1. Perform binary search
 * 2. If at any point your mid value equals the value you are searching for, store the index postion but
 * don't stop the algorithm, just move the high to 1 - mid and continue
 * if there are any further left occurences of the value, they will be updated in the result variable
 * Time complexity => O(logn)
*/

function leftMostOccurence(arr, val){
  let low = 0;
  let high = arr.length - 1;
  let mid, result;

  while(low <= high){
    mid = Math.floor((low + high)/ 2);

    if(arr[mid] === val){
      result = mid;
      //for left-most occurence, set low = mid + 1;
      high = mid - 1;
    }

    if(arr[mid] > val){
      high = mid - 1;
    }

    if(arr[mid] < val){
      low = mid + 1;
    }
  }

  return result;
}


let myArr = [1,1,2,2,3,4,5,6];

let res = leftMostOccurence(myArr,2);
console.log('res is ', res);

/* Conceptual - Interpolation Search is an improvement over
 * for instances where the elements in a sorted array are uniformly distributed.
 * Whereas binary search always goes to the middle element to check, interpolation
 * search may go to different values according to the value of the key being accessed
 * e.g, if you have [1,2,3,4,5,6,7] and the value of the key is 6, it may guess a value near the end of the array, like 5
 */

function interpolationSearch(arr, val){
  let start = 0;
  let end = arr.length - 1;

  if(val > arr[arr.length - 1] || val < arr[0]){
    return false
  }

  while(start <= end){
    // position should determine the propotion the value is above the start value and figure out the corresponding index
    // so if the value you are searching for is 60% of the way towards the end from the start, then your selectedIndex should be as well
    // which can be calculated as
    // start + [val - arr[low] / (arr[high] - arr[low]] * (hi - low)
    selectedIndex =  Math.floor(start + ((val - arr[start]) / (arr[end] - arr[start])) * (end - start));
    console.log('start is ', start);
    console.log('end is ', end);

    if(arr[selectedIndex] === val ){
      return true;
    }

    if(arr[selectedIndex] < val ){
      start = selectedIndex + 1;
    }

    if(arr[selectedIndex] > val ){
      end = selectedIndex - 1;
    }

    if(start === end){
      return false;
    }

  }

  return false;
}

let myArr = [1,2,3,4,5,6,7,8,10];
let res = interpolationSearch(myArr, 9);

console.log('res is ', res);

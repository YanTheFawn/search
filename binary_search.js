/* Binary search - given a sorted list, one can use the binary search algorithm
 * to find an element in a list.
 * Algo:
 * 1. Inspect the middle element in the searchStart and searchEnd indexes (initialize them to be the start/end of the array)
 * 2. If the value is the one you are looking for, return true
 * 3. If not and the value is smaller than the one you're searching for, update the end of the array to point to one less than this element
 * 4. If not and middle value is larger, update the searchStart index to middleIndex + 1 a
 * 5. Repeat this process until searchIndex and start Index are the same, and if you reach this point, you can return false
 * Runtime Complexity => O(logn)
 *
 */
 function binarySearch(arr, val){
   let searchStartIndex = 0;
   let searchEndIndex = arr.length - 1;
   let hasValue = false;

   while(searchStartIndex <= searchEndIndex){
    let midPoint = Math.floor((searchEndIndex + searchStartIndex) / 2);
     if(arr[midPoint] === val){
       hasValue = true;
       break;
     }

     if(arr[midPoint] < val){
       searchStartIndex = midPoint + 1;
     }

     if(arr[midPoint] > val){
       searchEndIndex = midPoint - 1;
     }
   }

   return hasValue;
 }

let myArr = [1,2,3,4,5];

let res = binarySearch(myArr, 4);
console.log('res is ', res);

// merge sort

function mergeSort(arr){
    // Base Case
    if (arr.length <= 1){
        return arr;
    }

    // Middle index
    const mid = Math.floor(arr.length/2);

    // Recursive Calls for the left and right 
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    // Merging arrays
    const newArr = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length){
        if (left[i] < right[j]){
            newArr.push(left[i]);
            i++;
        } else {
            newArr.push(right[j]);
            j++;
        }
    }

    // remaining elements
    return newArr.concat(left.slice(i)).concat(right.slice(j));
}

testArr = [105, 79, 100, 110];
console.log(mergeSort(testArr));
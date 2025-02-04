// Fibonacci iteration version
function fibIterative(inputNum){
    let num1 = 1;
    let num = 0;
    const arr = []
    while(inputNum > 0){
        arr.push(num);
        const temp = num1;
        num1 = num1 + num;
        num = temp;
        inputNum--;
    }
    return arr;
}


// Fibonacci recursive version 
function fibRecursive(n){

    // Base case
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const arr = fibRecursive(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
}

// Merge Sort


console.log(fibRecursive(8));

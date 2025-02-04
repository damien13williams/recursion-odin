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
function fibRecursive(num){
    
}

// Merge Sort


console.log(fibIterative(8));
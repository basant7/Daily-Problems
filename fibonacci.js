// fibonacci using without recursion
const fibonacci = (a,b) =>{
    let temp;
    var i = 0
    while(i<10){
        temp = a+b;
        a=b;
        b=temp;
        i++
    }
    return temp;
}

console.log(fibonacci(0,1))

// iterative way
const fib = (n) => {
    let arr = [0,1];
    for(let i = 2; i < n+1; i++){
        arr.push(arr[i-2] + arr[i-1]);
    }
    return arr[n];
}

console.log(fib(11));

// fibonacci suing recursion
const fibo = (n) =>{
    if(n<=1){
        return 1;
    }
    return fibo(n-1) + fibo(n-2);
    
}

console.log(fibo(10))

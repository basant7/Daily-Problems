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

// fibonacci suing recursion
const fibo = (n) =>{
    if(n<=1){
        return 1;
    }
    return fibo(n-1) + fibo(n-2);
    
}

console.log(fibo(10))
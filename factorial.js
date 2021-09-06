// using recursion
const factorial = (n)=>{
    if(n<=1){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}

console.log(factorial(5));

// without recursion
const fact = (a)=>{
    var result=1;
    for(var i = 1; i<=a; i++){
        result = result * i;
    }
    return (result);
}

console.log(fact(5))

// using while loop without resursion
const facto = (b)=>{
    if(b <= 0){
        return 1;
    }
    var result=1,i=b;
    while(i>0){
        result = result * i;
        i--;
    }
    return result;
}

console.log(facto(5))

// using turnary
const factor = (c) => {
    return (c==0 || c==1)? 1: c*factor(c-1);
}

console.log(factor(5));
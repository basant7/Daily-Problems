// main class
class Stack{
    constructor(){
        this.array = [];
    }

    // to look for the first element
    peek(){
        return this.array[this.array.length-1];
    }

    // to add new element in the stack on the top
    push(value){
        this.array.push(value);
        return this;
    }

    // to remove the topmost element from the stack
    pop(){
        this.array.pop();
        return this;
    }
}

const myStack = new Stack();
myStack.push(1)
myStack.push(3)
myStack.push(5)
myStack.push(7)
myStack.pop()
console.log(myStack)

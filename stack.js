// create a node with value and pointer
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// main class
class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    // to check for the top-most value
    peek(){
        return this.top;
    }

    // to push an element at the top of the stack using linked list
    push(value){
        const newNode = new Node(value);
        // if the stack is empty, make the newNode tha first node
        if(this.length == 0){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            let pointer = this.top;
            this.top = newNode;
            this.top.next = pointer;
        }
        this.length++;
        return this;
    }

    // to pop out the top-most element from the stack
    pop(){
        // if the stack is empty, return null
        if(this.top == null){
            return null;
        }
        this.top = this.top.next;
        this.length--;
        return this;
    }

}

const myStack = new Stack();
myStack.push(2);
myStack.push(4);
myStack.push(6);
myStack.push(8);
myStack.push(10);
console.log(myStack);
myStack.pop();
console.log(myStack);
console.log(myStack.peek());

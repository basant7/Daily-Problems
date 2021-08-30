// main class
// use of two stacks to perform enqueue and dequeue
class QueueStack{
    constructor(){
        this.stack1 = [];
        this.stack2 = [];
    }

    // enqueue using two stacks
    enqueue(value){
        while(this.stack1.length != 0){
            // move all the elements form stack1 to stack2
            this.stack2.push(this.stack1.pop());
        }
        // push the element in stack1
        this.stack1.push(value);
        while(this.stack2.length != 0){
            // pop all the element from stack2 to stack1
            this.stack1.push(this.stack2.pop());
        }
        return this;
    }

    // remove the elements from the queue using stack
    dequeue(){
        // if the queue is empty return null
        if(this.stack1.length == 0){
            return null;
        }
        // pop out the element
        let x = this.stack1[this.stack1.length-1];
        this.stack1.pop();
        return this;
    }

}

const myQueueStack = new QueueStack();
myQueueStack.enqueue(1);
myQueueStack.enqueue(3);
myQueueStack.enqueue(5);
myQueueStack.enqueue(7);
myQueueStack.enqueue(9);
console.log(myQueueStack);
myQueueStack.dequeue();
console.log(myQueueStack);
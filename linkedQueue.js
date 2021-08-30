// create node
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// main class
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    // look for the first element in a queue
    peek(){
        return this.first;
    }
    
    // to insert an element in the queue
    enqueue(value){
        const newNode = new Node(value);
        // if there is no element in the queue
        if(this.length == 0){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    // to remove an element from the queue
    dequeue(){
        // if there is no element in the queue
        if(this.first == null){
            return null;
        }
        // if there is only one element then the last should point to null
        if(this.first == this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }

    // to convert queue in form of array
    // to display elements in form of queue -> comment the display function and console.log(myQueue)
    display(){
        let array = [];
        let currentNode = this.first;
        while(currentNode != null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.dequeue();
console.log(myQueue.display());
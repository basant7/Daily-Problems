class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        this.head = {
            value : value,
            next : null
        }
        this.last = this.head;
        this.length = 1;
    }

    // add element at last of the node
    append(value){
        const newNode = new Node(value);
        this.last.next = newNode;
        this.last = newNode;
        this.length++;
        return this;
    }

    // add element to the begining of the node
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head
        this.head = newNode;
        this.length++;
        return this;
    }

    // display linked list in array form
    display(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    // to get the previous element
    traverseToIndex(index){
        let current = 0;
        let currentNode = this.head;
        while(current !== index){
            currentNode = currentNode.next;
            current++;
        }
        return currentNode;
    }

    // To insert in the middle of the linked list
    insert(index, value){
        while(index >= this.length){
            return this.append(value);
        }
        const newNode = new Node(value);
        let prev = this.traverseToIndex(index-1);
        newNode.next = prev.next;
        prev.next = newNode;
        this.length++
        return this;
    }
    
     // delete a node
    delete(index){
        while(index<this.length){
            if(index>0){
            let prev = this.traverseToIndex(index-1);
            let nodeToDelete = prev.next;
            prev.next = nodeToDelete.next;
            }else{
                // if it is first node
                let nodeToDelete = this.head;
                this.head = nodeToDelete.next;
            }
            this.length--;
            return this;
        }
    }

}

const myLinkedList = new LinkedList(10);
myLinkedList.append(12);
myLinkedList.append(15);
myLinkedList.prepend(1);
myLinkedList.insert(2,4);
myLinkedList.insert(4,20);
myLinkedList.insert(10,26);
myLinkedList.display();
console.log(myLinkedList.display());

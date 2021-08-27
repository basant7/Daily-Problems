// create a class Node to use it to create new nodes
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

// main class
class DoublyLL{
    constructor(value){
        this.head = {
            value : value,
            next : null,
            prev : null
        }
        this.tail = this.head;
        this.length = 1;
    }

    // to add element in the  end of the linked list
    append(value){
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    // to add the element at the beginning
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode.next;
        this.head = newNode;
        this.length++;
        return this;
    }

    // to traverse the node to get to a specific position
    treverseToIndex(index){
        let current = 0;
        let currentNode = this.head;
        while(current != index){
            currentNode = currentNode.next;
            current++;
        }
        return currentNode;
    }

    // to insert an element at middle of the linked list
    insert(index, value){
        if(index>=this.length){
            return this.append(value)
        }

        let newNode = new Node(value);
        let prevNode = this.treverseToIndex(index-1);
        let nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.length++;
        return this;
    }

    // function to delete an element at the begining and middle of the linked list
    delete(index){
        while(index<this.length){
            
            if(index>0){
                let prevNode = this.treverseToIndex(index-1);
                let currentNode = prevNode.next;
                prevNode.next = currentNode.next;
                currentNode.next.prev = prevNode;
            }else{
                let currentNode = this.head;
                this.head = currentNode.next;
            }
            this.length--;
            return this;
        }
    }

    // function to display the elements of the doubly linked list in form of array
    display(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}

const DoublyLinkedList = new DoublyLL(10);

DoublyLinkedList.append(12);
DoublyLinkedList.append(14);
DoublyLinkedList.prepend(8);
DoublyLinkedList.insert(3, 13)
DoublyLinkedList.delete(0);
DoublyLinkedList.display();
console.log(DoublyLinkedList.display())
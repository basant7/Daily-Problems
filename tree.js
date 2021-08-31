// create node
class Node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

// main class with root = null
class BinaryTree{
    constructor(){
        this.root = null;
    }

    // insert the siblings in right or left accordingly
    insert(value){
        // create a new node
        const newNode = new Node(value);
        // if the node is empty --> assign the element to root node
        if(this.root ==null){
            this.root = newNode;
        }else{
            let currentNode = this.root;
            // looping till condition is true
            while(true){
                // check whether the value is less than the root node
                if(value < currentNode.value){
                    // go left
                    // if the currentNode.left is empty, place the newnode there
                    if(currentNode.left == null){
                        currentNode.left = newNode;
                        return this;
                    }
                    // if currentNode.left is not empty, update the currentNode with that value
                    currentNode = currentNode.left;
                }else{
                    // right
                    // if the currentNode.right is empty, place the newnode there
                    if(currentNode.right == null){
                        currentNode.right = newNode;
                        return this;
                    }
                     // if currentNode.right is not empty, update the currentNode with that value
                    currentNode = currentNode.right;
                }
            }
        }
    }
    
    // to find an element
    lookup(value){
        // if the root is null return false
        if(this.root == null){
            return false;
        }
        let currentNode = this.root;
        // if element is present
        while(currentNode){
            // if(value == currentNode.value){
            //     return value;
            // }
            if(value < currentNode.value){
                currentNode = currentNode.left;
            }
            if(value > currentNode.value){
                currentNode = currentNode.right;
            }
            if(currentNode.value == value){
                return currentNode;
            }
        }
        return false;
    }
}

const Tree = new BinaryTree();
Tree.insert(9);
Tree.insert(4);
Tree.insert(6);
Tree.insert(20);
Tree.insert(170);
Tree.insert(15);
Tree.insert(1);
console.log(Tree.lookup(1));
console.log(JSON.stringify(traverse(Tree.root)))

// just to show tree structure in console
function traverse(node){
    const tree = {value : node.value};
    tree.left = node.left === null ? null:
    traverse(node.left);
    tree.right = node.right === null ? null:
    traverse(node.right);
    return tree;

}

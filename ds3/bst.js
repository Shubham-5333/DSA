class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
} 

class BST{
    constructor(){
        this.root = null;
    }
    insert(value){
         var node = new Node(value)
        if(this.root === null){  
            this.root = node;
            return this
        }else{
            let curr = this.root
            while(curr){
                if(value < curr.value){
                    if(curr.left === null){
                        curr.left = node
                        return this
                    }else{
                        curr = curr.left
                    }
                } else if(value > curr.value){
                    if(curr.right === null){
                        curr.right = node
                        return this
                    }else{
                        curr = curr.right
                    }
                }
            }
        }
    }
    findMin(node = this.root) {
        if (node === null) return null; // Tree is empty
        while (node.left !== null) {
            node = node.left;
        }
        return node.value;
    }
    findMax(node = this.root) {
        if (node === null) return null; // Tree is empty
        while (node.right !== null) {
            node = node.right;
        }
        return node.value;
    }
    search(value){
        let curr = this.root
        while(curr !== null){
            if(value === curr.value){
                return true
            }
            if(value < curr.value){
                curr = curr.left
            }else{
                curr = curr.right
            }
        }
        return false
    }
   
    BFS(){
        const queue = [];
        queue.push(this.root);
        
        while(queue.length){
            let curr = queue.shift();
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
        return queue;
       }

       findClosest(value) {
        let curr = this.root;
        let closest = curr.value;

        while(curr !== null){
            if(Math.abs(value - closest) > Math.abs(value - curr.value)){
                closest = curr.value;
            }
            if(value < curr.value){
                curr = curr.left;
            } else if(value > curr.value){
                curr = curr.right;
            } else {
                break; // If the exact value is found, break out of the loop
            }
        }

        return closest;
    }

    isBST(node = this.root, min = null, max = null) {
        if (node === null) return true;

        if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
            return false;
        }

        return this.isBST(node.left, min, node.value) && this.isBST(node.right, node.value, max);
    }

    printTree(node) {
        if (node !== null) {
            console.log(node.value);
            this.printTree(node.left);
            this.printTree(node.right);
        }
    }
}

let tree = new BST()
tree.insert(10)
tree.insert(11)
tree.insert(16)
tree.insert(5)
tree.insert(3)
// tree.insert()
tree.printTree(tree.root)

// console.log("min value :",tree.findMin());
// console.log("max value :",tree.findMax());
// console.log(tree.search(12));


// tree.BFS()

console.log(tree.isBST());

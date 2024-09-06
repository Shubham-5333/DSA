class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }
    insert(value){
        let node = new Node(value)
        if(!this.root){
            this.root = node
            return this
        }else{
            let curr = this.root
            while(curr){
                if(value < curr.value){
                    if(curr.left === null){
                        curr.left = node
                        return this
                    }else{
                        curr= curr.left
                    }
                }else if(value > curr.value){
                    if(curr.right === null){
                        curr.right =node
                        return this
                    }else{
                        curr = curr.right
                    }
                }
            }
        }
    }
    inOrder(node = this.root){
        if(node){
            this.inOrder(node.left)
            console.log(node.value);
            this.inOrder(node.right)
        }
    }
}

let tree = new BST()

tree.insert(10)
tree.insert(1)
tree.insert(15)
tree.insert(5)
tree.insert(19)
tree.insert(22)

tree.inOrder()
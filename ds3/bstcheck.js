class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
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
                    if(!curr.left){
                        curr.left = node
                        return this
                    }else{
                        curr = curr.left
                    }
                }else if(value >  curr.value){
                    if(!curr.right){
                        curr.right = node
                        return this
                    }else{
                        curr = curr.right
                    }
                }
            }
        }
    }

    search(value){
        let curr = this.root
        while(curr !== null){
            if(curr.value === value){
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

    isBST(node =this.root,min = null,max = null){
        if(!node) return true
        if((min !== null && node.value < min ) || (max !== null && node.value >= max)){
            return false
        }
        return this.isBST(node.left,min,node.value) && this.isBST(node.right,node.value,max)
    }

    findMin(node = this.root){
        if(!node) return null
        if(node !== null){
            node = node.left
        }
        return node.value
    }
    findMAx(node = this.root){
        if(node ===null){
            return null
        }
        if(node !== null){
            node = node.right
        }
        return node.value
    }

    print(node){
        if(node){
            this.print(node.left)
            console.log(node.value);
            this.print(node.right)
        }
    }
}


let tree = new BST()

tree.insert(10)
tree.insert(1)
tree.insert(5)
tree.insert(19)
tree.insert(13)
tree.insert(18)
tree.insert(9)
tree.insert(16)

tree.print(tree.root)

console.log(tree.findMAx());
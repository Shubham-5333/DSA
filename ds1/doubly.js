class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null
    }
}
class Doubly {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0
    }
    push(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            node.next = this.head
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }
    pop() {
        if (this.isEmpty()) {
            return "empty"
        }
        if (this.size === 1) {
            this.head = null
            this.tail = null
        } else {
            let curr = this.head
            while (curr.next !== this.tail) {
                curr = curr.next
            }
            curr.next = null
        }
        this.size--
    }
    unshift(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            node.next = this.head
            this.head = node
            this.tail = node
        } else {
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    shift() {
        if (this.isEmpty()) {
            return "empty"
        }
        if (this.size === 1) {
            this.head = null
            this.tail = null
        } else {
            let curr = this.head
            this.head = curr.next
        }
        this.size--
    }

    insert(value, pos) {
        if (pos < 0 || pos > this.size) {
            return "Invalid position";
        }
        let node = new Node(value);
        if (pos === 0) { // Insert at the beginning
            this.unshift(value);
        } else if (pos === this.size) { // Insert at the end
            this.push(value);
        } else { // Insert at the specified position
            let curr = this.head;
            for (let i = 0; i < pos - 1; i++) {
                curr = curr.next;
            }
          
            node.next = curr.next;
            node.prev = curr;
        
            curr.next.prev = node;
   
            curr.next = node;
            this.size++;
        }
    }
    
    reverse() {
        if (this.isEmpty()) {
            return; // Nothing to reverse if the list is empty
        }
    
        let currNode = this.head;
        while (currNode !== null) {
            // Swap next and prev pointers of the current node
            let temp = currNode.next;
            // console.log("curnode.next:",currNode.next.value);
            currNode.next = currNode.prev;
            currNode.prev = temp;
    
            // Move to the next node
            currNode = currNode.prev; // After swapping, the next node becomes the previous node
        }
    
        // Swap head and tail pointers
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }
    
    deleteMid(){
        let mid = Math.floor(this.size/2)
        console.log("mid:",mid);
        let curr = this.head
        for(let i=1;i<mid;i++){
            curr = curr.next
        }
        console.log("YD",curr.value);
        curr.prev.next = curr.next
        this.size--
    }


    print() {
        let v = this.head
        while (v) {
            console.log(v.value);
            v = v.next
        }
    }
}

const li = new Doubly()
li.push(3)
li.push(4)
li.push(5)
li.push(9)
li.push(8)
li.push(6)
li.print()
li.reverse()
li.print()
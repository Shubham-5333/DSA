class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.size = 0
        this.tail = null
    }
    isEmpty() {
        return this.size === 0
    }
    push(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
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
        let poped = this.tail
        if (this.isEmpty()) {
            return undefined
        }
        if (this.size === 1) {  
            this.head = null
            this.tail = null
        } else {
            this.tail = poped.prev
            this.tail.next = null
            this.tail = null
        }
        this.size--
    }
    shift() {
        let oldHead = this.head
        if (this.isEmpty()) {
            return undefined
        }
        if (this.size === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.size--
    }
    unshift(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
        this.size++

    }

    print() {
        let b = this.head
        while (b) {
            console.log(b.value);
            b = b.next
        }
    }
}

let li = new DoublyLinkedList()
li.push(4)
li.push(5)
li.push(6)
li.push(8)
li.push(9)
li.print()

// li.pop()
li.unshift(0)
li.print()

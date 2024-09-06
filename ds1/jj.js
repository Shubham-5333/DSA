class Node {
    constructor(value) {
        this.value = value
        this.head = null
    }
}

class linkedlist {
    constructor() {
        this.head = null
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0
    }
    insert(value) {
        let newNode = new Node(value)
        if (this.isEmpty()) {
            this.head = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }
    insertAtEnd(value) {
        let newNode = new Node(value)
        if (this.head === null) {
            this.head = newNode
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
        this.size++
    }

    insertAtPosition(value, pos) {
        let newNode = new Node(value);
        if (this.isEmpty()) {
            newNode.next = this.head
            this.head = newNode
        } else {
            let current = this.head
            let prev = null
            let i = 0
            while (i < pos) {
                prev = current
                current = current.next
                i++
            }
            prev.next = newNode
            newNode.next = current
        }
        this.size++
    }

    delete(value) {
        let current = this.head
        let prev = null
        while (current) {
            if (current.value == value) {
                break
            }
            prev = current
            current = current.next
        }
        prev.next = current.next
        this.size--
    }
    reverse() {
        let current = this.head;
        let prev = null;
        let next = null;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    print() {
        let v = this.head
        while (v) {
            console.log(v.value);
            v = v.next
        }

    }
}

const list = new linkedlist()

list.insert(2)
list.insert(4)
list.insert(6)
list.insert(8)
list.insert(10)

// list.print()

list.insertAtPosition(7, 3)
list.delete(8)
list.reverse()
list.insertAtEnd(15)
list.print()
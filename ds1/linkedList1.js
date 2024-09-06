class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}



class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }
    push(value) {
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
    }
    shift(){
        if(this.size==0){
            return undefined
        }
        if(this.size===1){
            this.head=null
            this.tail=null
        }else{
            let current = this.head
            this.head = current.next
        }
        this.size--
    }
    pop(){
        if(this.size==0){
            return undefined
        }
        if(this.size===1){
            this.head=null
            this.tail=null
        }else{
            let current = this.head
            while(current.next !== this.tail){
                current=current.next
            }
            this.tail = current
            current.next =null
        }
        this.size--
    }
    unshift(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }
    print(){
        let current = this.head
        while(current){
            console.log(current.value);
            current = current.next  
        }
    }
}

const list = new LinkedList();

list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.print()
list.unshift(0)
list.print()

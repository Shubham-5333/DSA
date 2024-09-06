class Node{
    constructor(value){
        this.value= value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size =0
    }
    isEmpty(){
        return this.size ===0
    }
    push(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    pop(){
        if(this.isEmpty()){
            return "empty"
        }
        if(this.size===1){
            this.head = null
            this.tail = null
        }else{
            let curr = this.head
            while(curr.next !== this.tail){
                curr = curr.next
            }
            curr.next = null
            this.tail = curr
        }
        this.size--
    }
    shift(){
        if(this.isEmpty()){
            return "empty"
        }
        if(this.size===1){
            this.head = null
            this.tail = null
        }else{
            let curr = this.head
            this.head = curr.next
            curr = null
        }
        this.size--
    }
    unshift(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    insert(value,pos){
        let node = new Node(value)
        if(pos<=1 || pos > this.size){
            return "invalid pos"
        }
        let curr = this.head
        for(let i=1;i<pos;i++){
            curr= curr.next
        }
        node.next = curr.next
        curr.next = node
        this.size++
    }
    rev(){
        let curr= this.head
        let prev = null
        let next = null
        while(curr){
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
    
    print(){
        let v = this.head
        while(v){
            console.log(v.value);
            v= v.next
        }
    }
}
let li = new LinkedList()
li.push(2)
li.push(3)
li.push(4)
li.push(5)

li.print()
li.rev()
li.print()

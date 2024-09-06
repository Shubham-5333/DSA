class Node{
    constructor(value){
        this.value= value
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head  = null
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.size===0
    }
    push(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head= node
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
        if(this.size ===1){
            this.head = null
            this.tail = null
        }else{
            let curr= this.head
            while(curr.next !== this.tail){
                 curr = curr.next
            }
            this.tail = curr
            curr.next = null
        }
        this.size--
    }
    unshift(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head =node
            this.tail= node
        }else{
            node.next = this.head
            this.head = node            
        }
        this.size++
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
            // console.log(curr.value);
            this.head = curr.next
            // console.log(this.head.value);
            // console.log(curr.value);
            curr = null

        }
    }

    delete(value){
        if(this.isEmpty()){
            return "Empty"
        }
        if(this.size===1){
            this.head= null
            this.tail = null
        }else{
            let curr = this.head
            let prev = null
            while(curr){
                if(curr.value === value){
                    break;
                }
                prev = curr
                curr = curr.next
            }
            prev.next = curr.next
        }
        this.size--
    }
    rev(){
        let curr = this.head
        let next = null
        let prev = null
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

let list = new linkedList()

list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.print()
list.rev()
list.print()




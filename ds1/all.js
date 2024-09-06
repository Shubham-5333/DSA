class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class linkedlist{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size ===0
    }
    insertAtStart(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.head=newNode
        }else{
            newNode.next=this.head
            this.head=newNode
        }
        this.size++
    }

    insertAtEnd(value){
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.head=newNode
        }else{
            let current = this.head
            let prev=null
            while(current.next){
               current=current.next
            }
            current.next=newNode
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
            let i = 1
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


    print(){
        console.log("printing");
        let v= this.head
        while(v){
            console.log(v.value);
            v=v.next
        }
    }
}

const list = new linkedlist()

list.insertAtStart(10)
list.insertAtStart(8)
list.insertAtStart(6)
list.insertAtStart(4)
list.insertAtStart(2)

list.print()
// list.insertAtEnd(15)
list.insertAtPosition(3,2)
list.print()
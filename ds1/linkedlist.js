// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null

//     }
// }

// class LinkedList {
//     constructor(){
//         this.head = null
//         this.size = 0;
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }
    
//     addToStart(value){
//         const newNode = new Node(value);
//         if(this.isEmpty()){
//             this.head=newNode;
//         }else{
//             newNode.list = this.head;
//             this.head = newNode;
//         }
//         this.size++
//     }
// }

// const list = new LinkedList()
// console.log(list.isEmpty());
// console.log(list.getSize());

// list.addToStart(5)
// console.log(list.isEmpty());
// console.log(list.getSize());


// class Node{
//     constructor(value){
//         this.value = value;
//         this.next=null;

//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0;
//     }
//     isEmpty(){
//         return this.size===0;
//     }
//     getSize(){
//         return this.size
//     }
//     addToEnd(value){
//         const newNode = new Node(value);
//         if(this.isEmpty()){
//             this.head=newNode;
//         }else{
//             let current= this.head;
//             while(current.next!==null){
//                 current=current.next
//             }
//             current.next = newNode;

//         }
//         this.size++
//     }
// }

// const list = new LinkedList()
// console.log(list.isEmpty(),list.getSize());
// list.addToEnd(8)

// console.log(list.isEmpty(),list.getSize());


class Node{
    constructor(value){
        this.value=value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size=0;
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    addToPosition(value,position){
        if(position<0 || position>this.size){
            console.log("Invalid Position");
            return
        }
        let newNode = new Node(value);
        if(position===0){
            newNode.next=this.head
            this.head=newNode;
        }else{
            let current = this.head;
            let prev = null
            let index = 0
            while(index<position){
                prev= current
                current=current.next
                index++
            }
            prev.next = newNode
            newNode.next = current
        }
        this.size++
    }
}

const list = new LinkedList()
console.log(list.isEmpty(),list.getSize());
list.addToPosition(10,0)
list.addToPosition(20,1)
list.addToPosition(30,2)
console.log(list.isEmpty(),list.getSize());
// class Node{
//     constructor(values){
//         this.values=values
//         this.next=null
//     }
// }


// class linkedlist{

//     constructor(){
//         this.head=null
//         this.size=0
//     }

//     isEmpty(){
//         return this.size == 0
//     }

//     insert(values){
//         let node=new Node(values)

//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             let current=this.head

//             while(current.next){
//                 current=current.next
//             }
//            current.next=node
//         }
//         this.size ++
//     }

//     findmid(){
//         let mid=Math.floor(this.size/2)
//         let current= this.head

//         for(let i=1;i<=mid;i++){
//             current = current.next
//         }

//         return current.values
//     }

//     print(){
//      let v = this.head 
//      while(v){
//         console.log(v.values);
//         v=v.next
//      }  
//     }

// }

// let list=new linkedlist()
// list.insert(12)
// list.insert(13) 
// list.insert(1) 
// list.insert(16) 
// list.insert(139) 
// console.log(list.findmid());
// // console.log(list);
// // list.print()



class Node {
    constructor(value) {
        this.value = value
        this.next = null
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

    
    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i=1
        let current=this.head
        while(current){
            if(current.value==value){
                return true
            }
            current=current.next
            i++
        }
        return false
    }

    delete(value) {
        let current = this.head
        let prev;

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
    unshift(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.head = node
            
        }
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
console.log(list.isEmpty());
list.insert(10)
list.insert(8)
list.insert(5)
list.insert(3)
console.log(list.isEmpty());
list.print()
console.log(list.search(8));
// list.delete(5)
// list.print();
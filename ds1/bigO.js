class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class Singly {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    push(value) {
        let newNode = new Node(value)
        if (this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
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
            while (curr.next != this.tail) {
                curr = curr.next
            }
            // console.log("safsdaasf",curr.next.value);
            curr.next = null
            this.tail = curr
        }
        this.size--
    }
    reverse() {
        let prev = null
        let curr = this.head
        let next = null
        while (curr !== null) {
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.tail = this.head
        this.head = prev
    }

    delete(value){
        let curr = this.head
        let prev;
        while(curr){
            if(curr.value == value){
                break;
            }
            prev = curr
            curr = curr.next
        }
        prev.next = curr.next
        this.size--
    }

    unshift(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    // findmid(){
    //             let mid=Math.floor(this.size/2)
    //             let current= this.head
        
    //             for(let i=1;i<=mid;i++){
    //                 current = current.next
    //             }
        
    //             return current.value
    //         }
            findmid(){
                let mid=Math.floor(this.size/2)
                let current= this.head
            
                for(let i=1;i<=mid;i++){
                    current = current.next
                }
                // console.log(current.value);
                console.log(current.value);
            }
            
    print() {
        let v = this.head
        while (v) {
            console.log(v.value);
            v = v.next
        }
    }
}

let list = new Singly()
list.push(3)
list.push(4)
list.push(6)
list.print()
list.findmid()
list.print()


// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//         this.prev = null
//     }
// }

// class Doubly{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size =0
//     }
//     isEmpty(){
//         return this.size ===0
//     }
//     push(value){
//         let newNode = new Node(value)
//         if(this.isEmpty()){
//             this.head = newNode
//             this.tail = newNode
//         }else{
//             this.tail.next = newNode
//             newNode.prev = this.tail
//             this.tail = newNode
//         }
//         this.size++
//     }
    
//     pop(){
//         let poped = this.tail
//         if(this.isEmpty()){
//             return "empty"
//         }
//         if(this.size ===1){
//             this.head = null
//             this.tail = null
//         }else{
//           this.tail =poped.prev
//           this.tail.next = null
//           this.tail = null
//         }
//         this.size--
//     }

//     shift(){
//         let poped = this.head;
//         if(this.isEmpty()){
//             return "empty"
//         }
//         if(this.size ===1){
//             this.head = null
//             this.tail = null
//         }else{
//             this.head = poped.next
//             this.head.prev = null
//             poped.next = null
//         }
//         this.size--
//     }
//     unshift(value){
//         let node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//             this.tail = node
//         }else{
       
//     }
//     reverse() {
//         let current = this.head;
//         let prev = null;
//         let next = null;
//         while (current) {
//             next = current.next;
//             current.next = prev;
//             prev = current;
//             current = next;
//         }
//         this.head = prev;
//     }

//     print(){
//         let v = this.head
//         while(v){
//              console.log(v.value);
//              v = v.next
//         }    
//     }
// }

// let li = new  Doubly();
// li.push(3)
// li.push(5)
// li.push(7)

// li.print()
// li.reverse(8)



// li.print()
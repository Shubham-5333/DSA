// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }
// class linkedList {
//     constructor() {
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }
//     isEmpty() {
//         return this.size === 0
//     }
//     push(value) {
//         let node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//             this.tail = node
//         } else {
//             this.tail.next = node
//             this.tail = node
//         }
//         this.size++
//     }
//     pop() {
//         if (this.isEmpty()) {
//             return undefined
//         }
//         if (this.size === 1) {
//             this.head == null
//             this.tail = null
//         } else {
//             let curr = this.head
//             while (curr.next !== this.tail) {
//                 curr = curr.next
//             }
//             curr.next = null
//             this.tail = curr
//         }
//         this.size--
//     }

//     shift() {
//         if (this.isEmpty()) {
//             return undefined
//         }
//         if (this.size === 1) {
//             this.head == null
//             this.tail = null
//         } else {
//            let curr = this.head
//            this.head = curr.next
//            curr = null
//         }
//         this.size--
//     }

//     delete(value){
//         if(this.isEmpty()){
//             return undefined
//         }else{
//             let curr = this.head
//             let prev = null
//             while(curr){
//                 if(curr.value === value){
//                     break;
//                 }
//                 console.log("vl",curr.value);
//                 prev = curr
//                 curr = curr.next
//             }
//             console.log("pr:",prev.next.value,"curr:",curr.next.value);
//             prev.next = curr.next
//         }
//         this.size--
//     }



// print(){
//     let v = this.head
//     while (v) {
//         console.log(v.value);
//         v = v.next
//     }
// }
    
// }

// let li = new linkedList()
// li.push(3)
// li.push(5)
// li.push(6)
// li.push(8)
// li.print()
// li.delete(6)
// li.print()


class Node {
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}
class doubly{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.size ===0
    }
    push(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
           this.tail.next = node
           node.prev =this.tail
           this.tail = node
        }
        this.size++
    }
    pop(){
        if(this.isEmpty()){
            return undefined
        }
        if(this.size===1){
            this.head =null
            this.tail = null
        }else{
            this.tail=this.tail.prev
            this.tail.next = null
        }
        this.size--
    }

    shift(){
        if(this.isEmpty()){
            return undefined
        }
        if(this.size ===1){
            this.head = null
            this.tail = null
        }else{
            this.head = this.head.next
            this.head.prev = null
        }
        this.size--
    }

    unshift(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            let curr = this.head
            curr.prev = node
            node.next = curr
            this.head = node
        }
        this.size++
    }

    // delete(value){
    //     let prev = null
    //     if(this.isEmpty()){
    //         return undefined
    //     }else{
    //         let curr = this.head
    //         while(curr.value == value){
    //             prev = curr
    //             curr = curr.next
    //         }
    //         prev.next = curr.next
    //     }
    //     this.size--
    // }
    rev(){
        let curr = this.head
        let prev = null
        let next = null
        while(curr){
            next = curr.next
            curr.next = prev
            prev =  curr
            curr = next
        }
        this.head = prev
    }

    del(value){
        let curr = this.head
        let prev = null
        while(curr){
            if(curr.value ===value){
                break;
            }
            prev = curr
            curr = curr.next
        }
        prev.next = curr.next

    }

    print(){
        let v= this.head
        while(v){
            console.log(v.value);
            v = v.next
        }
    }
}

let li = new doubly()
li.push(9)
li.push(8)
li.push(4)
li.push(2)
li.print()
li.del(4)
li.print()

// class Node{
//     constructor(value){
//         this.value=value
//         this.next = null
//     }
// }

// class linkedlist{
//     constructor(){
//         this.head = null
//         this.size= 0
//     }
//     isEmpty(){
//         return this.size===0;
//     }
//     getSize(){
//         return this.size;;
//     }
//     insert(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.head=newNode
//         }else{
//             let current = this.head
//             while(current.next){
//                 current=current.next
//             }
//             current.next=newNode
//         }
//         this.size++
//     }
//     findMid(){
//         let mid = Math.floor(this.size/2)
//         let current = this.head
//         for(let i=1;i<=mid;i++){
//             current= current.next
//         }
//         return current.value
//     }

//     addposition(values,position){

//         let node=new Node(values)
//         let prev=null;
//         let current=this.head
//         let i=0
//         while(i<position-1){
//             prev=current
//             current=current.next
//             i++
//         }

//         node.next=prev.next
//         prev.next=node
       
//         this.size ++

//     }


//     print(){
//         let v= this.head
//         while(v){
//             console.log(v.value);
//             v=v.next
//         }

//     }
// }
// const list = new linkedlist()
// list.insert(20)
// list.insert(50)
// list.insert(2)
// list.insert(7)
// list.insert(22)
// list.addposition(10,4)
// list.print()
// console.log(list.getSize());


class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedlist{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        this.size===0
    }
    prepend(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode
        }else{
            newNode.next = this.head
            this.head= newNode
        }
        this.size++
    }
    addPosition(pos,value){
        let newNode = new Node(value)
        let prev = null
        let current = this.head
        let i=0;
        while(i<pos){
            prev = current
            current = current.next
            i++
        }
        newNode.next = prev.next
        prev.next = newNode
        this.size++
    }
    deleteNode(pos) {
        if (pos < 0 || pos >= this.size) {
            console.log("Invalid position");
            return;
        }
        let current = this.head;
        if (pos === 0) {
            this.head = current.next;
        } else {
            let prev = null;
            let i = 0;
            while (i < pos-1) {
                prev = current;
                current = current.next;
                i++;
            }
            prev.next = current.next;
        }
        this.size--;
    }
    printReverse(node) {
        if (node === null) {
          return;
        }
        this.printReverse(node.next);
        process.stdout.write(node.data + " -> ");
      }

    print(){
        let n = this.head
        while(n){
            console.log(n.value);
            n=n.next
        }
    }
   

}

const list = new linkedlist()
list.prepend(3)
list.prepend(2)
list.prepend(1)

// list.print()

list.addPosition(2,23)
// list.print()


list.deleteNode(2)
// list.print()
list.printReverse(list.head);


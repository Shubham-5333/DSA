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
    let node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
      this.tail = this.head
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.size++
  }

  pop() {
    // let curr = this.head
    if (this.isEmpty()) {
      return;
    } else if (this.head.next === null) {
      this.head = null
      this.tail = null
    } else {
      let curr = this.head
      while (curr.next !== this.tail) {
        curr = curr.next
      }

      curr.next = null
      this.tail = curr

    }
    this.size--
  }

  insert(value, pos) {
    let node = new Node(value)
    if (this.isEmpty()) {
      node.next = this.head
      this.head = node
    } else {
      let curr = this.head
      let prev = null
      let i = 0
      while (i < pos) {
        prev = curr
        curr = curr.next
        i++
      }
      prev.next = node
      node.next = curr
    }
    this.size++
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
    let b = this.head
    while (b) {
      console.log(b.value);
      b = b.next
    }
  }
}

const li = new Singly()
li.push(3)
li.push(5)
li.push(7)
li.push(9)


li.print()
li.reverse()
li.print()
// li.insert(4, 2)
// li.print()



// class Node {
//   constructor(value) {
//     this.value = value
//     this.next = null
//     this.prev = null
//   }
// }

// class doubly {
//   constructor() {
//     this.head = null
//     this.tail = null
//     this.size = 0
//   }
//   isEmpty() {
//     return this.size === 0
//   }
//   push(value) {
//     let node = new Node(value)
//     if (this.isEmpty()) {
//       this.head = node
//       this.tail = node
//     } else {
//       this.tail.next = node
//       node.prev = this.tail
//       this.tail = node
//     }
//     this.size++
//   }
//   pop() {
//     if (this.isEmpty()) {
//       return
//     }
//     if (this.size === 1) {
//       this.head = null
//       this.tail = null
//     } else {
//       let popped = this.tail
//       this.tail = popped.prev
//       this.tail.next = null
//       this.tail = null
//     }
//     this.size--
//   }
//   shift() {
//     if (this.isEmpty()) {
//       return

//     }
//     if (this.size === 1) {
//       this.head = null
//       this.tail = null
//     } else {
//       let popped = this.head
//       this.head = popped.next
//       this.head.prev = null
//       popped.next = null
//     }
//     this.size--
//   }

//   unshift(value) {
//     let node = new Node(value)
//     if (this.isEmpty()) {
//       this.head = node
//       this.tail = node
//     } else {
//       this.head.prev = node
//       node.next = this.head
//       this.head = node
//     }
//     this.size++
//   }

//   delete(value) {
//     let current = this.head
//     let prev;

//     while (current) {
//       if (current.value == value) {
//         break
//       }
//       prev = current
//       current = current.next
//     }
//     prev.next = current.next
//     this.size--
//   }

//   print() {
//     let v = this.head
//     while (v) {
//       console.log(v.value);
//       v = v.next
//     }
//   }
// }

// let li = new doubly()
// li.push(3)
// li.push(5)
// li.push(7)
// li.push(9)
// li.print()
// li.delete(7)
// li.print()
class Nodes {
  value: number;
  next: null | Nodes;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: null | Nodes;
  tail: null | Nodes;
  size: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty(): Boolean {
    return this.size === 0;
  }

  getSize(): number {
    return this.size;
  }

  prepend(value: number) {
    const node = new Nodes(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value: number) {
    const node = new Nodes(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      if (this.tail !== null) {
        this.tail.next = node;
      }
      this.tail = node;
    }
    this.size++;
  }

  removeNodeUsingIndex(index: number): number {
    if (index < 0 || index >= this.size) {
      console.log("list is empty");
      return -1;
    }

    let removeNode: Nodes | null;

    if (this.size === 1 && index === 0) {
      this.head = null;
      this.tail = null;
    } else if (index === 0) {
      removeNode = this.head;
      this.head !== null ? (this.head.next = removeNode) : null;
    } else if (index === this.size - 1) {
      let prev: null | Nodes = this.head;

      for (let i = 0; i < index - 1; i++) {
        if (prev !== null) {
          prev = prev.next;
        }
      }

      if (prev !== null && prev.next !== null) {
        removeNode = prev.next;
        prev.next = prev.next.next;
      }
    }
    this.size--;
    return index;
  }

  insertValue(value: number, index: number): number {
    if (index < 0 || index > this.size) {
      console.log("index is invalid");
      return index;
    }
    const node = new Nodes(value);
    if (index === 0) {
      this.prepend(value);
    } else {
      let prev: Nodes | null = this.head;
      for (let i = 0; i < index - 1; i++) {
        if (prev !== null) {
          prev = prev.next;
        }
      }
      let nextNode: Nodes | null;
      if (prev !== null) {
        nextNode = prev.next;
        node.next = nextNode;
        prev.next = node;
      }
    }

    this.size++;
    return value;
  }

  removeNodeUsingValue(value: number): number {
    let removeNode: Nodes | null;
    if (value === null) {
      console.log("value is null");
      return 0;
    } else if (this.head?.value === value) {
      removeNode = this.head;
      this.head.next = removeNode.next;
      return value;
    } else {
      let prev: Nodes | null = this.head;
      let index: number = 0;
      console.log(prev,'prev outside while');
      while (prev?.next && prev.next.value !== value) {
        prev = prev.next;
        console.log(prev,'prev')
        index++;
      }
      console.log(prev,'abouve if statement');
       if(prev !== null && prev.next){
          prev.next = prev.next.next
          return index
        }
      
      console.log("value not found");
      return -1;
    }
  }

  print(): void {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    } else {
      let curr: Nodes | null = this.head;
      let list: string = "";
      while (curr) {
        list += `${curr.value} `;
        curr = curr.next;
      }
      console.log("list is showing", list);
    }
  }
}

const list = new LinkedList();

list.print();

list.prepend(4);

list.prepend(6);

list.append(3);

list.insertValue(2, 5);

list.removeNodeUsingIndex(2);


list.removeNodeUsingValue(4)

list.print();

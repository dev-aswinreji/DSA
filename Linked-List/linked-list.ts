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
  tail: null | Nodes
  size: number;
  constructor() {
    this.head = null;
    this.tail = null
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
      this.tail = node
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value: number){
    const node = new Nodes(value)
    if(this.isEmpty()){
      this.head = node
      this.tail = node
    }else{
      if(this.tail !== null){
        this.tail.next = node
      }
      this.tail = node
    }
    this.size++
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

list.prepend(6)

list.append(3)

list.print();

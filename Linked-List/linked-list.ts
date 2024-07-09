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

  // removeNodeUsingIndex(index:number) : number {
  //   if(this.isEmpty()){
  //     console.log('value is null');
  //     return -1
  //   }
  //   if(index < 0 || index > this.size){
  //     console.log('list is empty');
  //     return 
  //   }
  // }

  insertValue(value:number,index:number):number{
    if(index < 0 || index > this.size){
      console.log('index is invalid');
      return index
    }
    const node = new Nodes(value)
    if(index === 0 ){
      this.prepend(value)
    }else{
      let prev : Nodes | null = this.head
      for(let i = 0 ; i< index -1 ; i++){
        if(prev !== null){
          prev = prev.next
        }
      }
      let nextNode : Nodes | null
      if(prev !== null){
        nextNode = prev.next
        node.next = nextNode
        prev.next = node
      }
    }

    this.size++
    return value
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

list.insertValue(2,5)

list.print();

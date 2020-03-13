function ListNode(value) {
    this.val = value;
    this.next = null;
}



class LinkedList{
    constructor(){
        this.head = null;
    }

    addFront(Node, value){
        newNode = new ListNode(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    removeFront(firstNode){
        if(this.head === null){
            return null;
        }
        else {
            this.head = this.head.next;
        }
    }

    front(){
        if(this.head){
            return this.head.value;
        }
    }

    contains(value){
        var current = this.head;
        while(current){
            if(current.value == value){
                return "found it";
            }
            current = current.next;
        }
    }

    length(){
        var current = this.head;
        if(!current){
            return 0;
        }
        var count = 1;
        while(current.next){
            count++;
            current = current.next;
        }
        return count;
    }

    display(){
        var current = this.head;
        if(!current){
            return "[]";
        }
        var output = "[";
        while(current.next){
            output += current.value + ", ";
            current = current.next;
        }
        output += "]";
        return output;
    }


}

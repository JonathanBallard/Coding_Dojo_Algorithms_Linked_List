function ListNode(value) {
    this.value = value;
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
            if(current.next === null){
                break;
            }
            current = current.next;
        }
    }

    length(){
        var current = this.head;
        if(current === null){
            return 0;
        }
        var count = 1;
        while(current){
            count++;
            if(current.next === null){
                break;
            }
            current = current.next;
        }
        return count;
    }

    display(){
        var current = this.head;
        if(current === null){
            return "[]";
        }
        var output = "[";
        while(current){
            output += current.value + ", ";
            if(current.next === null){
                break;
            }
            current = current.next;
        }
        output += "]";
        return output;
    }


}

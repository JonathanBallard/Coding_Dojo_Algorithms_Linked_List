







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
}












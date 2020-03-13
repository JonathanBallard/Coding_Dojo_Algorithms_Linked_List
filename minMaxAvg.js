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
        if(!current){
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
        if(!current){
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


    max(){
        var current = this.head;
        if(!current){
            return "empty";
        }
        var max = current.value;
        while(current){
            if(current.value > max){
                max = current.value;
            }
            if(current.next === null){
                break;
            }
            current = current.next;
        }
        return max;
    }

    min(){
        var current = this.head;
        if(!current){
            return "empty";
        }
        var min = current.value;
        while(current){
            if(current.value < min){
                min = current.value;
            }
            if(current.next === null){
                break;
            }
            current = current.next;
        }
        return min;
    }

    min(){
        var current = this.head;
        var total = 0;
        if(!current){
            return "empty";
        }

        while(current){
            total += current.value;
            if(current.next === null){
                break;
            }
            current = current.next;
        }

        return total / this.length();
    }

}

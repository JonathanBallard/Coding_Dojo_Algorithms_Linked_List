

function secondToLast(node){
    var current = node.next;
    if(current === null){
        return "insufficient length";
    }

    while(current.next){
        if(current.next.next === null){
            return current;
        }
        current = current.next;
    }
}


function removeSelf(node){
    var current = node;
    if(current === null){
        return "node is null";
    }
    while(current){
        if(current.next == node){
            current.next = node.next;
        }
        if(current.next === null){
            return 'node not found'
        }
        current = current.next;
    }
}

function copy(sll){
    var current = sll.head;
    var copySll = new LinkedList();
    copySll.head = sll.head;
    var copyCurrent = sll.head;
    if(current === null){
        return copySll;
    }
    
    while(current){
        newNode = new ListNode(current.value);
        copyCurrent.next = newNode;
        if(current.next === null){
            return copySll;
        }
        copyCurrent = copyCurrent.next;
        current = current.next;
    }
}

function filter(head, lowVal, highVal){
    var current = head;
    if(current === null){
        return "head is null";
    }

    while(current){
        if(current.value > highVal || current.value < lowVal){
            removeSelf(current);
        }
        if(current.next === null){
            return "filtered";
        }
        current = current.next;
    }
}







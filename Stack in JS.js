/*
= STACK =
Author: Mohit H. Paryani
Date Created: 21-Feb-2019 
Last Modified: 21-Feb-2019 
Functions:
    - Push
    - Pop
    - Peek
    - Empty
    - Search
*/

class Stack {
    constructor() {
        this.items = [];
    }

    stack_Push(value) {
        this.items.push(value);
    }

    stack_Pop() {
        if (!this.stack_IsEmpty()) {
            this.items.pop();
        } else {
            console.log("Cannot pop, Stack is empty!");
        }
    }

    stack_Peek() {
        if (!this.stack_IsEmpty()) {
            console.log(this.items[this.items.length - 1]);
            return this.items[this.items.length - 1];
        } else {
            console.log("Cannot peek, Stack is empty!");
            return null;
        }
    }

    stack_IsEmpty() {
        /* this.items.length == 0 ? console.log("Stack is empty") : console.log("Stack is not empty"); */
        return this.items.length == 0;
    }

    stack_Search(value) {
        if (!this.stack_IsEmpty()) {
            if (this.items.indexOf(value) != -1) {
                console.log(`${value} is present at position ${this.items.indexOf(value) + 1} in the stack`);
                return this.items.indexOf(value) + 1;
            } else {
                console.log(`${value} is not present in the stack`);
                return -1;
            }
        }
    }

    printStack() {
        console.log(this.items);
    }
}

function StackOperaions() {
    var stack = new Stack();
    stack.stack_IsEmpty() ? console.log("Stack is empty") : console.log("Stack is not empty");
    stack.stack_Push(1);
    stack.stack_Push(2);
    stack.stack_Push(3);
    stack.stack_IsEmpty() ? console.log("Stack is empty") : console.log("Stack is not empty");
    stack.stack_Push(4);
    stack.stack_Push(5);
    stack.stack_Peek();
    stack.stack_Pop();
    stack.stack_Push(3);
    stack.printStack();
    stack.stack_Push(7);
    stack.stack_Search(3);
    stack.stack_Search(7);
    stack.stack_Search(21);
    stack.printStack();
    stack.stack_Pop();
    stack.stack_Pop();
    stack.stack_Pop();
    stack.stack_Pop();
    stack.stack_Pop();
    stack.stack_Pop();
    stack.stack_Pop();
    stack.stack_Pop();
    stack.stack_Peek();
}
StackOperaions();
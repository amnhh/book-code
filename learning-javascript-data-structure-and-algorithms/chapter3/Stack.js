class Stack {
    constructor () {
        this._items = [];
    }

    /**
     * 添加元素到栈顶
     */
    push (...item) {
        this._items.push(...item);
    }

    /**
     * 栈顶推出元素
     */
    pop () {
        return this._items.pop();
    }

    /**
     * 查看栈顶元素
     */
    peek () {
        return this._items[this._items.length - 1];
    }

    /**
     * 栈是否为空
     */
    isEmpty () {
        return this._items.length === 0;
    }

    /**
     * 栈的大小
     */
    size () {
        return this._items.length;
    }

    /**
     * 清空栈
     */
    clear () {
        this._items.length = 0;
    }

    /**
     * 打印
     */
    print () {
        console.log(this._items.join(', '));
    }
}
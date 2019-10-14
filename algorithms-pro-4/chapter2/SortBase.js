class SortBase {
    constructor(list) {
        this.list = list
        this.sort(this.list)
    }

    sort() {}

    /**
     * 打印 list
     */
    show(list) {
        console.log(list);
    }

    /**
     * 是否被排序了
     */
    isSorted(list) {
        for (let i = 1; i < list.length; i ++) {
            if (list[i] < list[i - 1]) return false;
        }
        return true;
    }

    /**
     * 交换两者顺序
     */
    exchange(list, i, j) {
        const tmp = list[i];
        list[i] = list[j];
        list[j] = tmp;
    }
}

module.exports = SortBase
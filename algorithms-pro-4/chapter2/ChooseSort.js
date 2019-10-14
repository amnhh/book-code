const SortBase = require('./SortBase')

class ChooseSort extends SortBase {
  sort(list) {
    for (let i = 0; i < list.length; i++) {
      let min = i
      // 内层循环为的是找到从 i ~ list.length 中，最小的那个元素
      for (let j = i; j < list.length; j++) {
        if (list[j] < list[min]) min = j
      }
      this.exchange(list, i, min)
    }
  }
}

module.exports = ChooseSort;
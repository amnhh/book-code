/**
 * 带重复的 Array
 * @param length
 * @param min
 * @param max
 */
const getRandomArray = (length, min = 0, max = 100) => {
    const ret = Array(length),
      difference = max - min
    for (let i = 0; i < length; i ++) {
        ret[i] = Math.floor(Math.random() * difference)
    }
    return ret
}

/**
 * 不重复的 array
 * @param length
 * @param min
 * @param max
 */
const getRandomArrayWithoutRepeat = (length, min = 0, max = 100) => {
    if (length > max - min) {
        throw new Error('length 值大于 min - max, 不重复做不到')
    }
    const ret = [],
      _set = new Set(),
      difference = max - min

    while(true) {
        const _size = _set.size,
          current = Math.floor(Math.random() * difference)

        _set.add(current)
        if (_size !== _set.size) {
            ret.push(current)
        }

        if (ret.length === length) {
            break
        }
    }

    return ret
}

module.exports = {
    getRandomArray,
    getRandomArrayWithoutRepeat
};
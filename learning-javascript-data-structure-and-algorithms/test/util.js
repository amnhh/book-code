const bookName = require('../config').bookName
const getTitlePrefixFn = require('../../utils/test').getTitlePrefixFn

const getTestTitlePrefix = getTitlePrefixFn(bookName)

module.exports = {
    getTestTitlePrefix
}
/**
 * Methods of test engine.
 */

const PREFIX_TEMPLATE = '[#prefix] : ';

const BOOK_NAME_TO_TEST_TITLE_PREFIX_MAP = {
    'learning-javascript-data-structure-and-algorithms' : 'js data structure'
}

/**
 * Get test case title prefix.
 */
const getTitlePrefixFn = (bookName) => () => {
    return PREFIX_TEMPLATE
        .replace('#prefix', BOOK_NAME_TO_TEST_TITLE_PREFIX_MAP[bookName])
}

module.exports = {
    getTitlePrefixFn
}
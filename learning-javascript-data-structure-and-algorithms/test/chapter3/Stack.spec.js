const test = require('ava')
const getTestTitlePrefix = require('../util').getTestTitlePrefix

const prefix = getTestTitlePrefix()
const logger = console.log

const Stack = require('../../chapter3/Stack')

logger(prefix)

test(`${prefix}Stack pop and push`, t => {
    const st = new Stack()
    // size equals 0 when init.
    t.is(st.size(), 0)

    // push two items, size equals 2
    st.push(1)
    st.push('2')
    t.is(st.size(), 2)

    // invoke pop, size comes to 1
    // and the returned value of pop invoke equals '2'
    // returned value is the latest value when pop
    const stItem = st.pop()
    t.is(stItem, '2')
    t.is(st.size(), 1)
});
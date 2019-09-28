const test = require('ava')
const getTestTitlePrefix = require('../util').getTestTitlePrefix

const prefix = getTestTitlePrefix()
const logger = console.log

const Stack = require('../../chapter3/Stack')

test(`${prefix}Stack pop and push methods`, t => {
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

test(`${prefix}Stack clear method`, t => {
    const st = new Stack()
    st.push(1)
    st.push('2')

    t.is(st.size(), 2)

    st.clear()
    t.is(st.size(), 0)
})

test(`${prefix}Stack isEmpty method`, t => {
    const st = new Stack()
    t.true(st.isEmpty())

    st.push(5)
    t.false(st.isEmpty())
})

test(`${prefix}Stack peek method`, t => {
    const st = new Stack()
    t.is(st.peek(), void 0)

    st.push(5)
    t.is(st.peek(), 5)

    st.push(9, 1)
    t.is(st.peek(), 1)
})
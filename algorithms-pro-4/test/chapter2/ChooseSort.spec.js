const test = require('ava')
const getTestTitlePrefix = require('../util').getTestTitlePrefix

const prefix = getTestTitlePrefix()
const logger = console.log

const ChooseSort = require('./../../chapter2/ChooseSort')
const sortMethods = require('./../../../utils/sort')

test(`${prefix}Choose Sort current`, t => {
  const testList100 = sortMethods.getRandomArray(100)
  const testList10 = sortMethods.getRandomArray(10)

  t.deepEqual(
    testList100.sort((v1, v2) => v1 - v2),
    new ChooseSort(testList100).list
  )

  t.deepEqual(
    testList10.sort((v1, v2) => v1 - v2),
    new ChooseSort(testList10).list
  )
})

test(`${prefix}Choose Sort current (without repeat)`, t => {
  const testList100 = sortMethods.getRandomArrayWithoutRepeat(100)
  const testList10 = sortMethods.getRandomArrayWithoutRepeat(10)

  t.deepEqual(
    testList100.sort((v1, v2) => v1 - v2),
    new ChooseSort(testList100).list
  )

  t.deepEqual(
    testList10.sort((v1, v2) => v1 - v2),
    new ChooseSort(testList10).list
  )
})
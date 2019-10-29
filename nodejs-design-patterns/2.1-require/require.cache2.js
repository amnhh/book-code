// 执行了两次

const __test = require('./__test');

console.log(__test);

const _filepath = require.resolve('./__test.js')
delete require.cache[_filepath]

const __test2 = require('./__test');

console.log(__test2);
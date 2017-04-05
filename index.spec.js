const test = require('tape')

const curry = require('./index.js')

const testFn = function(foo, bar, baz) {
    return foo + bar + baz
}

test('no curry', t => {
    t.equal(testFn(1, 2, 3), 6)
    t.end()
})

test('curry', t => {
    t.equal(curry(testFn)(1)(2)(3), 6)
    t.end()
})

test('one arg', t => {
    const toCurry = a => a+1
    t.equal(curry(toCurry)(1), 2)
    t.end()
})

test('overcurry', t => {
    t.equal(curry(testFn)(1)(2)(3, 4), 6)
    t.end()
})

test('all params', t => {
    t.equal(curry(testFn)(1, 2, 3), 6)
    t.end()
})

test('curry 2', t => {
    t.equal(curry(testFn)(1, 2)(3), 6)
    t.end()
})

test('bind', t => {
    const bound = curry(testFn).bind(null, 1, 2)
    t.equal(bound(3), 6)
    t.end()
})

test('preserve context', t => {
    const fn = function(a, b, c) {
        return this.foo + a + b + c
    }
    t.equal(fn.call({ foo: 10 }, 1, 2, 3), 16)
    const curried = curry(fn).call({ foo: 10 }, 1)
    t.equal(curried(2)(3), 16)
    t.end()
})

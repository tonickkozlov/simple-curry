module.exports = function(curryTarget) {
    'use strict'

    if (curryTarget.length === 1) {
        return curryTarget
    }

    return function curried(...args) {
        return args.length < curryTarget.length ?
            curried.bind(this, ...args) :
            curryTarget.apply(this, args)
    }
} 


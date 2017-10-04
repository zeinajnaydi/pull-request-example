import {partial} from './utils'

const add =  (a,b)  => a+b

test.skip('partial applies the first argument ahead of time',() => {
	const inc = partial(add,1)
	const result = inc(2)
	expect(result).toBe(3)
})
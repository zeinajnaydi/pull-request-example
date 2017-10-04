import {addition,sub,mult,div} from './testHelper'

test('addition function',() => {
	const result = addition(2,3)
	expect(result).toBe(5)
})
test('substract function',() => {
	const result = sub(8,3)
	expect(result).toBe(5)
})
test('divide function',() => {
	const result = div(10,2)
	expect(result).toBe(5)
})
test('multiply function',() => {
	const result = mult(2,3)
	expect(result).toBe(6)
})
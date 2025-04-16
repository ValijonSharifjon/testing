import { calculateTotal } from "./orderCalculator"

describe('Test orderCalculate function', () => {
    test('Test empty array', () => {
        expect(calculateTotal([])).toBe(0);
    })

    test('Test valid dates', () => {
        const data = [
            {
                price: 1000,
                qty: 3
            }, 
            {
                price: 100000,
                qty: 2
            }
        ]
        expect(calculateTotal(data)).toBe(203000);
    })

    test('Test invalid dates', () => {
        const data = [
            {
                price: 1000,
                qty: 3
            }, 
            {
                price: 100000,
                qty: 2
            }
        ]
        expect(calculateTotal(data)).toBe(203000);
    })
})
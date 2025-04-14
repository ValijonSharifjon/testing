import { sum, divide, capitalize, filterAdults, Calculator, fetchUserName } from './unit';

describe('Utils Functions', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('divide returns correct result', () => {
    expect(divide(8, 2)).toBe(4);
  })

  test('divide throws error on zero', () => {
    expect(() => expect(divide(3, 0)).toThrow("Division by zero"));
  });

  test('capitalize works correctly', () => {
    expect(capitalize('vali')).toBe('Vali');
    expect(capitalize('VALI')).toBe('Vali');
    expect(capitalize('')).toBe('');
  });

  test('filterAdults returns only adults', () => {
    const data = [
      {
        name: 'Bob',
        age: 18
      },
      {
        name: 'Alica',
        age: 15
      }, 
      {
        name: 'Vali',
        age: 22
      }
    ];

    expect(filterAdults(data)).toEqual(['Bob', 'Vali']);
  })
});


describe('Calculator class', () => {
  let calc: Calculator;

  beforeEach(() => {
    calc = new Calculator();
  });

  test('add and getTotal', () => {
    calc.add(5);
    expect(calc.getTotal()).toBe(5);
  });

  test('subtract and getTotal', () => {
    calc.subtract(5);
    expect(calc.getTotal()).toBe(-5);
  });

  test('add/subtract and getTotal', () => {
    calc.add(5).subtract(4);
    expect(calc.getTotal()).toBe(1);
  });

  test('reset and getTotal', () => {
    calc.add(5).subtract(4);
    calc.reset();
    expect(calc.getTotal()).toBe(0);
  });
});

describe('fetchUserName', () => {
  test('returns user name from API', async () => {
    const mockApi = {
      getUser: jest.fn().mockResolvedValue({ name: 'Alice' })
    };
    const name = await fetchUserName(mockApi);
    expect(name).toBe('Alice');
    expect(mockApi.getUser).toHaveBeenCalled();
  });
});


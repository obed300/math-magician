import calculate from '../components/Logic/Calc';

describe('operate', () => {
  test('clear all when AC is clicked', () => {
    const obj = {
      total: '5',
      next: '5',
      operation: '+',
    };
    const result = calculate(obj, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
  test('clear all when AC is clicked', () => {
    const obj = {
      total: '5',
      next: '0',
      operation: '+',
    };
    const result = calculate(obj, '0');
    expect(result).toEqual({});
  });
  test('test calculator for the buttons functionality', () => {
    const obj = {
      total: '1',
      next: '2',
      operation: '+',
    };
    expect(calculate(obj, '+/-')).toEqual({
      total: '1',
      next: '-2',
      operation: '+',
    });
    expect(calculate(obj, '=')).toEqual({
      total: '3',
      next: null,
      operation: null,
    });
  });
});

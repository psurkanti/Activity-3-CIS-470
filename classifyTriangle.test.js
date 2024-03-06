
const  classifyTriangle  = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
    test('should classify an Equilateral triangle', () => {
      expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should classify an Isosceles triangle', () => {
      expect(classifyTriangle(10, 10, 5)).toBe('Isosceles');
    // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should classify a Scalene triangle', () => {
      expect(classifyTriangle(10, 12, 14)).toBe('Scalene');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

  
    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
    test('Verify if lower bounds for b throw an error', () => {
      expect(classifyTriangle(10, 0, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });
  
  test('Ensuring an error is thrown for out-of-lower-bounds c', () => {
      expect(classifyTriangle(10, 10, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });
  
  test('Testing upper bounds for a throw an error', () => {
      expect(classifyTriangle(201, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });
  
  test('Checking upper bounds for b throw an error', () => {
      expect(classifyTriangle(10, 201, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });
  
  test('Testing upper bounds for c throw an error', () => {
      expect(classifyTriangle(10, 10, 201)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });
  
  test('Confirm "Not a Triangle" is returned when a >= b + c', () => {
      expect(classifyTriangle(100, 10, 10)).toBe('Not a Triangle');
  });
  
  test('Check "Not a Triangle" is returned when b >= a + c', () => {
      expect(classifyTriangle(10, 100, 10)).toBe('Not a Triangle');
  });
  
  test('Ensure error is thrown for equilateral out of upper bounds', () => {
      expect(classifyTriangle(1000, 1000, 1000)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });
  
  test('Verify error for equilateral out of lower bounds', () => {
      expect(classifyTriangle(-10, -10, -10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });
  
  test('Check "Isosceles" is returned when sides are valid and b === c', () => {
      expect(classifyTriangle(5, 10, 10)).toBe('Isosceles');
  });
  
  test('Ensure "Isosceles" is returned when sides are valid and a === c', () => {
      expect(classifyTriangle(10, 5, 10)).toBe('Isosceles');
  });
  
  test('Confirm "Not a Triangle" is returned even if all sides are different', () => {
      expect(classifyTriangle(150, 32, 64)).toBe('Not a Triangle');
  });
  
  test('Ensure error for isosceles out of upper bounds', () => {
      expect(classifyTriangle(1000, 1000, 1001)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });
  
  test('Check error for scalene out of upper bounds', () => {
      expect(classifyTriangle(1000, 1001, 1002)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });
  
  test('Verify "Isosceles" even when b is on the lower bound', () => {
      expect(classifyTriangle(10, 1, 10)).toBe('Isosceles');
  });
  
  test('Ensure "Isosceles" even if c is on the lower bound', () => {
      expect(classifyTriangle(10, 10, 1)).toBe('Isosceles');
  });
  
  test('Check "Scalene" even if a is on the upper bound', () => {
      expect(classifyTriangle(200, 199, 198)).toBe('Scalene');
  });
  
  test('Confirm "Scalene" even if b is on the upper bound', () => {
      expect(classifyTriangle(199, 200, 198)).toBe('Scalene');
  });
  
  test('Ensure "Scalene" even if c is on the upper bound', () => {
      expect(classifyTriangle(198, 199, 200)).toBe('Scalene');
  });
  
  test('Check error for isosceles out of lower bounds', () => {
      expect(classifyTriangle(-1000, -1000, -1001)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });
  
  });
  
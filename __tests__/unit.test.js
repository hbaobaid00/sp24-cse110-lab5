// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
import * as functions from '../code-to-unit-test/unit-test-me';

// Test cases for isPhoneNumber function
test('Valid phone number should return true', () => {
  expect(functions.isPhoneNumber('+1234567890')).toBe(true);
});

test('Invalid phone number should return false', () => {
  expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

// Test cases for isEmail function
test('Valid email should return true', () => {
  expect(functions.isEmail('test@example.com')).toBe(true);
});

test('Invalid email should return false', () => {
  expect(functions.isEmail('example.com')).toBe(false);
});

// Test cases for isStrongPassword function
test('Valid strong password should return true', () => {
  expect(functions.isStrongPassword('Password123')).toBe(true);
});

test('Invalid weak password should return false', () => {
  expect(functions.isStrongPassword('weak')).toBe(false);
});

// Test cases for isDate function
test('Valid date should return true', () => {
  expect(functions.isDate('05/07/2024')).toBe(true);
});

test('Invalid date should return false', () => {
  expect(functions.isDate('2024/05/07')).toBe(false);
});

// Test cases for isHexColor function
test('Valid hex color should return true', () => {
  expect(functions.isHexColor('#ff0000')).toBe(true);
});

test('Invalid hex color should return false', () => {
  expect(functions.isHexColor('blue')).toBe(false);
});

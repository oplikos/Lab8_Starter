// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Phone number test 2 true 2 false one should be true but not sure', () => {
  expect(functions.isPhoneNumber('858-534-2230')).toBe(true);//ucsd phone number 
  expect(functions.isPhoneNumber('858-484-3154')).toBe(true);//police department 
  expect(functions.isPhoneNumber('12345')).toBe(false);
  expect(functions.isPhoneNumber('555-555')).toBe(false);
  //checking if this works it should not no one should put 911 as there phone number lol
  expect(functions.isPhoneNumber('911')).toBe(false);
});

test('testing email address 2 true 3 false', () => {
  expect(functions.isEmail('oplikos@gmail.com')).toBe(true);
  expect(functions.isEmail('oplikos@hotmail.com')).toBe(true);
  expect(functions.isEmail('username')).toBe(false);
  expect(functions.isEmail('password')).toBe(false);
  expect(functions.isEmail('a@b')).toBe(false);
});

test('Strong Password Test', () => {
  expect(functions.isStrongPassword('Sis1234____')).toBe(true);
  expect(functions.isStrongPassword('Sarkis123__')).toBe(true);
  expect(functions.isStrongPassword('12345678')).toBe(false);
  expect(functions.isStrongPassword('12abcdef')).toBe(false);
});

test('testing the date entrie to be correct 2 true 2 false', () => {
  expect(functions.isDate('11/17/2022')).toBe(true);
  expect(functions.isDate('11/18/2022')).toBe(true);
  expect(functions.isDate('11/18')).toBe(false);
  expect(functions.isDate('13/13')).toBe(false);
});

test('hex color test 3 true 2 false', () => {
  expect(functions.isHexColor('880808')).toBe(true);
  expect(functions.isHexColor('0000FF')).toBe(true);
  expect(functions.isHexColor('FFA500')).toBe(true);
  expect(functions.isHexColor('sarkis')).toBe(false);
  expect(functions.isHexColor('finallythisisover')).toBe(false);
  
});
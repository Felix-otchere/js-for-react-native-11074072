 DCIT 202 ASSIGNMENT 1: Array Manipulation and User Info Handling

## Student Information

Name: Felix Kojo Otchere
Student ID: 11074072

## Overview

This project consists of two main tasks demonstrating JavaScript functionalities in preparation for using JavaScript with React Native.

 Tasks

### Task 1: Array Manipulation (`arrayManipulation.js`)

Description: Implements the `formatArrayStrings` function which formats strings in an array based on numerical values.
Details:
  - Converts strings to uppercase if the corresponding number is even.
  - Converts strings to lowercase if the corresponding number is odd.

javascript
// Example Usage
const { formatArrayStrings } = require('./arrayManipulation');
const strings = ['Alice', 'Bob', 'Charlie'];
const numbers = [1, 2, 3];
const result = formatArrayStrings(strings, numbers);
console.log(result); // Output: ['alice', 'BOB', 'charlie']

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

// Example Usage
const { formatArrayStrings } = require('./arrayManipulation');
const strings = ['Alice', 'Bob', 'Charlie'];
const numbers = [1, 2, 3];
const result = formatArrayStrings(strings, numbers);
console.log(result); // Output: ['alice', 'BOB', 'charlie']



userInfo.js`
-Purpose: Retrieves and formats user information.
-Functions: Includes methods to fetch and display user data.



tilizes the formatArrayStrings function to generate user profiles.
Details:ask 2: User Information Handling (userInfo.js)
Description: U
Defines a function createUserProfiles that takes in original names and modified names and returns user profiles.
Each profile contains a unique ID, the original name, and the modified name.

// Example Usage
const { formatArrayStrings } = require('./arrayManipulation');
const names = ['Alice', 'Bob', 'Charlie'];
const numbers = [1, 2, 3];
const formattedNames = formatArrayStrings(names, numbers);

function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        id: index + 1,
        originalName: name,
        modifiedName: modifiedNames[index]
    }));
}

const profiles = createUserProfiles(names, formattedNames);
console.log(profiles);


## Task 3: Integration
-Purpose: Combines functionalities from Task 1 and Task 2.
-Details: Integrates `arrayManipulation.js` and `userInfo.js` to produce a comprehensive outputs.


## Repository Details
- This repository contains JavaScript code for React Native development exercises.




Project Structure
.
├── arrayManipulation.js
├── userInfo.js
├── README.md




# Password Generator CLI 

### Description
This is a basic command-line application built with Node.js to generate random passwords. Users can specify the length of the password and choose to generate passwords in uppercase letters. The program also includes a help feature for instructions.

## Features
Generate random passwords with lowercase letters (default).  
Option to generate passwords with uppercase letters using `--uppercase.`  
Set password length with the `--length` flag (default: 8 characters).  
Display a help message using `--help`.

## How to Use
Make sure you have Node.js installed on your computer.
Run the program using the following commands in the terminal:

- Generate a default password (8 lowercase characters):  
 ` node index.js `

- Set a specific password length:  
 ` node index.js --length <number> `

- Example:    
 ` node index.js --length 12 `

- Generate an uppercase password:    
 ` node index.js --uppercase `

- Combine flags (e.g., uppercase and custom length):  
 ` node index.js --length 10 --uppercase `

- Show help instructions:  
 ` node index.js --help `

## Author
### Cody Collins
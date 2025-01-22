/**  
 * QAP 1 PASSSWORD GENERATOR
 * Author: Cody Collins
 * Date: 2025-01-22 - 
 * Description: A simple CLI application to generate passwords
*/

function generatePassword(length, uppercase) {
    const chars = uppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : 'abcdefghijklmnopqrstuvwxyz' 
    let password = ''
    
    for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)]
    }
    
    return password
}

function handleArguments(args) {
    const options = {
        length: 8,
        showHelp: false,
        uppercase: false,
    };

    if (args.includes('--help')) {
        options.showHelp = true;
        return options;
    } 

    const lengthIndex = args.indexOf('--length');
    if (lengthIndex !== -1) {
        const lengthValue = args[lengthIndex + 1];

        if (!lengthValue || isNaN(lengthValue) || lengthValue <= 0) {
            console.error('ERROR : Please enter a valid number for length.')
            process.exit(1);
        }
    
    options.length = parseInt(lengthValue);
    }

    if (args.includes('--uppercase')) {
        options.uppercase = true;
    }

    return options;
}

const args = process.argv.slice(2);

const options = handleArguments(args);

if (options.showHelp) {
    console.log(`
        Password Generator
        
        Usage:
        node index.js [--length <number>] [--uppercase] [--help]
        
        Options:
        --length <number>   Length of the password to generate (default: 8)
        --uppercase         Use uppercase letters in the password (default: false)
        --help              Show this help message
        
        `);
        
    process.exit(0);
}

const password = generatePassword(options.length, options.uppercase, options.help);

console.log(`Generated Password: ${password}`);
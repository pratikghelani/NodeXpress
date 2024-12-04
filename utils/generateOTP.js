const crypto = require('node:crypto');

// Character sets for different types of passwords
const digits = '0123456789';
const lowerCaseAlphabets = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseAlphabets = lowerCaseAlphabets.toUpperCase();
const specialChars = '#!&@';

module.exports = {

  // Function to generate password or OTP
  generate: function (length = 10, options = {}) {
    // Destructure options with default values
    const {
      digits: includeDigits = true,
      lowerCaseAlphabets: includeLowerCase = true,
      upperCaseAlphabets: includeUpperCase = true,
      specialChars: includeSpecialChars = true
    } = options;

    // Build the allowed characters string based on options
    let allowedChars = '';
    if (includeDigits) allowedChars += digits;
    if (includeLowerCase) allowedChars += lowerCaseAlphabets;
    if (includeUpperCase) allowedChars += upperCaseAlphabets;
    if (includeSpecialChars) allowedChars += specialChars;

    let generatedString = '';
    while (generatedString.length < length) {
      // Randomly select a character from the allowed characters
      const charIndex = crypto.randomInt(0, allowedChars.length);
      generatedString += allowedChars[charIndex];
    }

    return generatedString;
  }

};

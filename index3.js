import randomWords from 'random-words';
import { checkPalindrome, countVowels } from './fun.js';

const words = randomWords(5);

words.forEach((word, index) => {
    const vowels = countVowels(word);
    const palindrome = checkPalindrome(word);
    console.log(`word ${index + 1} -> ${word} -> vowelsCount: ${vowels} -> isPalindrome: ${palindrome}`);
});

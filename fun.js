export function checkPalindrome(word) {
    return word.toLowerCase() === [...word].reverse().join('').toLowerCase();
}

export function countVowels(word) {
    return (word.match(/[aeiou]/gi) || []).length;
}

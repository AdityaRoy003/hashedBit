let inputString = "This is an example string with more than twenty characters.";
let vowelsCount = 0;
let consonantsCount = 0;

for (let char of inputString) {
    if (/[aeiouAEIOU]/.test(char)) {
        vowelsCount++;
    } else if (/[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z]/.test(char)) {
        consonantsCount++;
    }
}

console.log("Number of vowels:", vowelsCount);
console.log("Number of consonants:", consonantsCount);
function correctfn(string, wrong, correct) {
    return string.replace(new RegExp(wrong, 'g'), correct);
}


let sentence = "The weather is nice, but the weater is unpredictable.";
let wrongWord = "weater";
let correctWord = "weather";

let correctedSentence = correctfn(sentence, wrongWord, correctWord);
console.log(correctedSentence);
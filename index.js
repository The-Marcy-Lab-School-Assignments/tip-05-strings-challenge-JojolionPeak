/*
Write a function named  capitalizeWords that takes a string (sentence) as input and returns
a new string where the first letter of each word is capitalized.
*/
/*
    First step: Translate
    How do we capitalize
    -method toUpperCase

    Second step: Hand walk
    sentence = "hello world"
    newSentence = "H"
    If we come across a space
        add the whitespace
    capitalize the next letter after whitespace
        If we come across a space, rationalize the next letter and add it to the string
        If neither just add to new string
        Increment i one more time
    Loop through every letter:
        Capitalize the first letter
            Add it to the newSentence


    We need to capitalize for every word
    -for loop

    What is first letter?
    -Every whitespace is follewed by the first letter of a word

    How do we return a new string?
    -create a new variable for the new string

    Edgecase: the first letter in the entire sentence
*/
const capitalizeWords = (sentence) => {
    let newSentence = ""
    for (i = 0; i < sentence.length; i++) {
        if (sentence[i] === sentence[0]) {
            newSentence += sentence[i].toUpperCase();
        } else if (sentence[i] === " ") {
            newSentence += sentence[i] + sentence[i + 1].toUpperCase();
            i++;
        } else if (sentence[i] !== " ") {
            newSentence += sentence[i];
        };
    };
    console.log(newSentence);
};

capitalizeWords("hello world from javascript");
// → "Hello World From Javascript"

capitalizeWords("javaScript");
// → "JavaScript"

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that 
// occur more than once in the input string. The input string can be assumed to contain only alphabets 
// (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice



// we are going to want all the letters to be lowercase, .toLowerCase() 
// we want to seperate the letters, .split()
// next we want to sort them out, .sort()
// we will need a new array to save the results in
// a for loop to iterate thru the letters
function duplicateCount(text){
    let textString = text.toLowerCase().split("").sort();
    let results = [];
    for(let i = 0; i < textString.length; i++){
        if(textString[i] === textString[i + 1]){
            results.push(textString[i])
        }
    }
    const newArray = new Set(results);
    return newArray.size;
}
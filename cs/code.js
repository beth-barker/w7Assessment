
// 1) Sum Zero

function addToZero (arr) {
    let value = false
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0){
                value = true
            } 
        }
    }
    console.log(value)
}


addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True

// The runtime of this is O(n^2) because of the nested for loop
// Space: O(1)



//2) Unique Characters

function hasUniqueChars (str) {
    let unique = true

    for(let i = 0; i < str.length; i++){
        for(let j = i +1; j < str.length; j++){
            if(str[i] === str[j]){
               unique = false
            }
        }
    }
    console.log(unique)
}
hasUniqueChars("Monday");
// -> True

hasUniqueChars("Moonday");
// -> False

// The runtime of this is O(n^2) 
// Space: O(1)


// 3) Pangram Sentence

function isPangram (str)  {
    str = str.toLowerCase();
    const { length } = str;
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphaArr = alphabets.split('');
    for(let i = 0; i < length; i++){
       const el = str[i];
       const index = alphaArr.indexOf(el);
       if(index !== -1){
          alphaArr.splice(index, 1);
       };
    };
    console.log(!alphaArr.length);
 };
 
 isPangram("The quick brown fox jumps over the lazy dog!");
 // -> True
 
 isPangram("I like cats, but not mice");
 // -> False

 // the runtime of this is O(n)
 // Space: O(1)


 // 4) Longest word
 function findLongestWord(words) {
    let count = 0
    for(let i = 0; i < words.length; i++){
        let wordLength = words[i].length
        if(wordLength > count)
        count = wordLength
    }
    console.log(count)
 }

 findLongestWord(["hi", "hello"]);
// -> 5

// the runtime of this is O(n)
// Space: O(1)
1.//Set someAdjective to a string of at least 3 characters and 
//append it to myStr using the += operator.

// let mystr="wonder"
// let str2="ful"
// const answer=(mystr+=srt2)
// console.log(answer)

let mystr="wonder"
let srt2="ful"
const answer=(mystr.concat(srt2))
console.log(answer)

2.//sorting an array of strings by length
 //We are given an array of strings, we need to 
 //sort the array in increasing order of string lengths
 let sentence= ["beautiful", "you", "are", "looking"]
 let sentence1= sentence.sort((a,b)=>{
    return a.length -b.length
  })
 console.log(sentence1)
 

 3.//reversing letters and words
 let word="I evol uoy os !hcum"

function reversed(word){
    let word1= word.split('').reverse().join('');
 console.log(word1)
 }
 reversed(word)

 4.//counting duplicate characters in the following string
let xters="adsjfdsfsfjsdjfhacabcsbajda"
function duplicates(xters){
   let xters1=xters.split().reduce()
   console.log(xters1)
}
 5.// finding a non repeated character in a string.

 6.//checking whether a string is a palindrome
function palindrome(){
string = string.replace(x);
let length = string.length;
for (let i = 0; i < length/2; i++) {
  if (string[i] !== string[length - 1 - i]) {
      return false;
  }
  else{
return true;
}
}
palindrome=("A man, a plan, a canal. Panama");
console.log(palindrome)
}



7.//checking that a string contains a substring
let design="manmade"

8.//cheking whether two strings are anagrams
//write a program in Javascript to check if two strings are anagrams 
//of each other or not
a= "india"
b= "nidia"
// let y=(a && b)
// for (i = 0; a[i] && b[i]; i++) {
//     count(a[i])
//     count(b[i])
// }
// if (a[i] || b[i])
//     return false
// console.log(y)
//     for (i = 0; i < 5; i++)
//     if (count[i])
//         return false  
//         console.log()  


 a= "hackathon"
 b= "achcthoon"
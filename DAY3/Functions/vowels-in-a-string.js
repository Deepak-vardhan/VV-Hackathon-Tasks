const countvowels=(str)=>{
let count=0;
let vowels='aeiou'
let bigvowels=vowels.toUpperCase();
   for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if(str.charAt(i)===vowels.charAt(j)||str.charAt(i)===bigvowels.charAt(j))
        count++;
  }
  }
  return count;
  
 }
 //replace deepak with you string
let string="deepak"

console.log(countvowels(string));

const sumofdigits=(num)=>{
 let rem=null;
 let result=0;
    while (num!=0) {
        rem=Math.floor(num%10)
        result=result+rem;
        num=Math.floor(num/10)
    }

return result
}

//replace 5 with your number 
let Num=58

console.log(sumofdigits(Num));

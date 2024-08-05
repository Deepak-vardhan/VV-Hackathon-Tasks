const sumofdigits=(num)=>{
 let rem=null;
 let result=0;
    while (num!=0) {
        rem=Number(num%10)
        result=result+rem;
        num=Math.floor(num/10)
    }

return result
}

//replace 5 with your number 
let Num=5

console.log(sumofdigits(Num));

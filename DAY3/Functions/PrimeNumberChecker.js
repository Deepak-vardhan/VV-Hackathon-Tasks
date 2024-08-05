
const isprime=(num)=>{
    let isprime=true
    if (num <= 1) return false; 
    if (num === 2) return true; 
    if (num % 2 === 0) return false;
for (let i = 3; i < num/2; i++) {
    if(num%i===0){
        isprime=false
        break;
    }
}
return isprime
}
let Number=21

if(isprime(Number)){
    console.log(`${Number} is prime number`);
}
else{
    console.log(`${Number} is not prime number`);
    
}
let arr = [1,2,1,4,6,2,5,5,2];

function removeduplicates(array){
let newarray = [];
// console.log(newarray[0]); 

let count = 0;

for (let i = 0; i < array.length; i++) {
    let isDuplicate = false; 

    for (let j = 0; j < count; j++) {
        if (newarray[j] === array[i]) {
            isDuplicate = true;
            break;
        }
    }

    if (!isDuplicate) {
        newarray[count] = array[i];
        count++; 
    }
}
return newarray
}

console.log(removeduplicates(arr));

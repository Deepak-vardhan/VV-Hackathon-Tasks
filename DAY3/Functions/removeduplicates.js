let array = [1, 2, 1, 4, 5];
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

console.log(newarray);

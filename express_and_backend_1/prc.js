const arr = [1,2,3,4,5];

const transform = (i) => {
    if(i % 2 == 0){
        return i;
    }
}

const newArr = arr.filter(transform);

console.log(newArr);
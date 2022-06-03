function accumulator(){
    let sum = 0;

    return (num)=>{
        sum = sum + num;
        return sum;
    }
}

const acc = accumulator()

console.log(acc(3))
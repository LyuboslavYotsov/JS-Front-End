function solve(count, input) {
    let array = [];
    for (let i = 0; i < count; i++) {
        const element = array[i];
        array[i] = input[i];
    }
    array.reverse();
    console.log(array.join(' '));
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);
//  Write a function to generate the Fibonacci sequence up to a given number of terms.
const createFibonacci = (n) => {
    const sequence = [];

    if (n > 0) sequence[0] = 0;
    if (n > 1) sequence[1] = 1;

    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }

    return sequence;
}

console.log(createFibonacci(10));
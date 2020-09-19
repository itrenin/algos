function search(arr, x) {

    let min = 0;
    let max = arr.length - 1;
    let mid;
    let guess;
    let count = 0

    while (min <= max) {
        mid = Math.floor((min + max) / 2);
        guess = arr[mid];
        count++;

        if (guess === x) {
            return `искомое число в массиве находится под индесом ${mid}, понадобилось ${count} операций, чтобы его найти`;
        }
        if (guess > x) {
            max = guess - 1;
        }
        if (guess < x) {
            min = mid + 1;
        }
    }

    return 'none';
}
console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40], 9))
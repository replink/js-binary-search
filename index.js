let a = [2, 3, 4, 5, 67, 345, 400];
let searchItem = 4;

let biSearch = (arr, el) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (arr[middle] === el) {
            console.log(middle);
            return true;
        }
        else if (arr[middle] < el) left = middle + 1;
        else right = middle - 1;
    }
    return false;
};
console.log(biSearch(a, searchItem));

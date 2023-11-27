function findEvenIndex(arr) {
    let index = 0;

    for (let i = 0; i < arr.length; i++) {

        let sumRight = 0;
        let sumLeft = 0;

        for (let j = 0; j < i; j++) {
            sumRight += arr[j];
        }

        for (let j = i + 1; j < arr.length; j++) {
            sumLeft += arr[j];
        }

        if (sumRight === sumLeft) {
            return i;
        }
    }

    return -1;
}

console.log(findEvenIndex([1,2,3,4,3,2,1]));
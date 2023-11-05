let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]

let arrMin = arr[0];
let k = 0
let arrMax = arr[0];
let l = 0
let summ = 0;
let i = 0;
let positiveQty = 0
let multPositiveQty = 1
let everPositiveQty = 0
let sumEverPositiveQty = 0
let oddPositiveQty = 0
let sumOddPositiveQty = 0
let negativeQty = 0
let maxx = arr[0];
let maxi = 0;

for (i = 0, min = 0, max = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        summ += arr[i];
        positiveQty++;
        multPositiveQty *= arr[i];
    }
    if (arr[i] <= arrMin) {
        arrMin = arr[i];
        k = i;
    }
    if (arr[i] >= arrMax) {
        arrMax = arr[i];
        l = i;
    }
    if (arr[i] < 0) {
        negativeQty++;
    }
    if (arr[i] % 2 !== 0 && arr[i] >= 0) {
        oddPositiveQty++;
        sumOddPositiveQty += arr[i];
    }
    if (arr[i] % 2 == 0 && arr[i] > 0) {
        everPositiveQty++;
        sumEverPositiveQty += arr[i]
    }
    if (arr[i] > maxx) {
        maxx = arr[i];
        arr[maxi] = 0;
        maxi = i;
    } else {
        arr[i] = 0;
    }
}

console.log('Сумма положительных эелементов: ' + summ + ';', 'Количество положительных элементов ' + positiveQty);
console.log('Минимальный элемент в массиве: ' + arrMin + ';', 'Его порядковый номер ' + k);
console.log('Максимальный элемент в массиве: ' + arrMax + ';', 'Его порядковый номер ' + l);
console.log('Количество отрицательных элементов ' + negativeQty)
console.log('Количество нечетных положительных элементов: ' + oddPositiveQty)
console.log('Количество четных положительных элементов: ' + everPositiveQty)
console.log('Сумма четных положительных элементов: ' + sumEverPositiveQty)
console.log('Сумма нечетных положительных элементов: ' + sumOddPositiveQty)
console.log('Произведение положительных элементов: ' + multPositiveQty)
console.log(arr);

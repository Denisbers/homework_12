let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]


let summ = 0;
let i = 0;
let positiveQty = 0
let multPositiveQty = 1


for (i = 0, min = 0, max = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        summ += arr[i];
        positiveQty++;
        multPositiveQty *= arr[i];
    }

}

console.log('Сумма положительных эелементов: ' + summ + ';', 'Количество положительных элементов ' + positiveQty);

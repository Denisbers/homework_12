let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]

let oddPositiveQty = 0
let sumOddPositiveQty = 0

for (i = 0, min = 0, max = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i] >= 0) {
        oddPositiveQty++;
        sumOddPositiveQty += arr[i];
    }
}
console.log('Количество нечетных положительных элементов: ' + oddPositiveQty)
console.log('Сумма нечетных положительных элементов: ' + sumOddPositiveQty)

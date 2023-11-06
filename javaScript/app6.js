let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]

let everPositiveQty = 0
let sumEverPositiveQty = 0

for (i = 0, min = 0, max = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0 && arr[i] > 0) {
        everPositiveQty++;
        sumEverPositiveQty += arr[i]
    }
}


console.log('Количество четных положительных элементов: ' + everPositiveQty)
console.log('Сумма четных положительных элементов: ' + sumEverPositiveQty)


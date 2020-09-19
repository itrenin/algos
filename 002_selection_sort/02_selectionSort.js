const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, -10];

// функция принимает массив в качестве аргумента и возвращает индекс наименьшего значения
function findSmallest(arr) {
    let min = arr[0];
    let minIndex = 0;

    for (let i = 0; i < arr.length; i++) {

        if (min > arr[i]) {
            minIndex = i;
        }
    }
    return minIndex;
}

// функия принимает несортированный массив и возвращает созданный на основе него отсортрованный 
// методом выбора. Старый массив удаляется по мере извлечения из него наименьших значений по 
// индексам в новый массив
function selectionSort(arr) {

    let sortedArr = [];
    let smallestTmp;
    while (arr.length !== 0) {
        smallestTmp = findSmallest(arr)
        sortedArr.push(arr[smallestTmp]);
        arr.splice(smallestTmp, 1);
    }

    return sortedArr
}

console.log(selectionSort(array))
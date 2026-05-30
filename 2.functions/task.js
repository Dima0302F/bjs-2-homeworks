// Задача 1
function getArrayParams(...arr) {
    if (arr.length === 0) {
        return { min: 0, max: 0, avg: 0 };
    }

    let min = Infinity;
    let max = -Infinity;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        if (current > max) {
            max = current;
        }
        if (current < min) {
            min = current;
        }
        sum += current;
    }

    const avg = +(sum / arr.length).toFixed(2);
    return { min: min, max: max, avg: avg };
}

// Задача 2
function summElementsWorker(...arr) {
    if (arr.length === 0) return 0;
    // Используюю reduce для суммирования
    return arr.reduce((sum, current) => sum + current, 0);
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) return 0;
    // Использую spread оператор с Math.max и Math.min
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return max - min;
}

function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) return 0;
    
    let sumEvenElement = 0;
    let sumOddElement = 0;
    
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        if (current % 2 === 0) {
            sumEvenElement += current;
        } else {
            sumOddElement += current;
        }
    }
    
    return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) return 0;
    
    let sumEvenElement = 0;
    let countEvenElement = 0;
    
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        if (current % 2 === 0) {
            sumEvenElement += current;
            countEvenElement++;
        }
    }
    
    if (countEvenElement === 0) return 0;
    return sumEvenElement / countEvenElement;
}

// Задача 3
function makeWork(arrOfArr, func) {
    if (arrOfArr.length === 0) return 0;
    
    let maxWorkerResult = -Infinity;
    
    for (let i = 0; i < arrOfArr.length; i++) {
        // Применяю функцию-насадку к текущему массиву данных, используя spread оператор
        const result = func(...arrOfArr[i]);
        
        if (result > maxWorkerResult) {
            maxWorkerResult = result;
        }
    }
    
    return maxWorkerResult;
}

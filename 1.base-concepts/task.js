"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  
  // дискриминант
  const d = b ** 2 - 4 * a * c;
  
  if (d < 0) {
    // Корней нет - возвращаем пустой массив
    return arr;
  } else if (d === 0) {
    // Один корень
    const root = -b / (2 * a);
    arr.push(root);
  } else {
    // Два корня
    const sqrtD = Math.sqrt(d);
    const root1 = (-b + sqrtD) / (2 * a);
    const root2 = (-b - sqrtD) / (2 * a);
    arr.push(root1, root2);
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Преобразование - параметры в числа
  const p = parseFloat(percent);
  const c = parseFloat(contribution);
  const a = parseFloat(amount);
  const n = parseFloat(countMonths);
  
  // Проверяем, что все параметры - валидные числа
  if (isNaN(p) || isNaN(c) || isNaN(a) || isNaN(n)) {
    return false;
  }
  
  // Если сумма кредита меньше или равна 0, возвращаем 0
  if (a <= 0) return 0;
  
  // тело кредита (сумма кредита минус первоначальный взнос)
  const loanBody = a - c;
  
  // если тело кредита меньше или равно 0, возвращаем 0
  if (loanBody <= 0) return 0;
  
  // Преобразуем процентную ставку
  const monthlyRate = p / 100 / 12;
  
  // Вычисляем ежемесячный платёж по формуле:
  // Платёж = S * (P + (P / (((1 + P)^n) - 1)))
  const monthlyPayment = loanBody * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, n) - 1)));
  
  // Вычисляем общую сумму выплат
  const totalAmount = monthlyPayment * n;
  
  // Округляем результат до двух знаков после запятой
  return Math.round(totalAmount * 100) / 100;
}

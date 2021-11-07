function fibcalc() {
  const fibNum = (n, f1 = 1, f2 = 2) => {
    if (n == 1 || n == 2) return 1;
    else return fibNum(n - 1) + fibNum(n - 2);
  };
  const negFibNum = (n, f1 = -1, f2 = -2) => {
    if (n == -1) {
      return 1;
    } else if (n == -2) {
      return f2 / 2;
    } else {
      return negFibNum(n + 2) - negFibNum(n + 1);
    }
  };

  let userNum = +prompt("Введите порядковый номер числа Фибоначчи");
  while (Number(userNum).toFixed(0) != userNum || userNum == "") {
    userNum = prompt("Введите число");
  }
  if (userNum >= 0) {
    alert(fibNum(Number(userNum)));
  } else {
    alert(negFibNum(Number(userNum)));
  }
}
fibcalc();

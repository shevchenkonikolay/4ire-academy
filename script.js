const EUR = "EUR";
const UAH = "UAH";
const PLN = "PLN";
const TRY = "TRY";
const USD = "USD";

const EUR_RATE = 0.033;
const UAH_RATE = 1;
const PLN_RATE = 0.15;
const TRY_RATE = 0.37;
const USD_RATE = 0.038;

let menu = true;

while (menu) {
  //Проверка началась
  let curr1;
  while (true) {
    curr1 = getUserAnswer(
      "Введите первую валюту (Доступные валюты: USD, UAH, TRY, EUR, PLN)"
    );
    if (
      curr1 !== USD &&
      curr1 !== TRY &&
      curr1 !== UAH &&
      curr1 !== PLN &&
      curr1 !== EUR
    ) {
      alert("ШОШ Ты ДЕЛАЕШЬ? !!(Доступные валюты: USD, UAH, TRY, EUR, PLN)!!");
    } else {
      break;
    }
  }
  let curr2;
  while (true) {
    curr2 = getUserAnswer(
      "Введите вторую валюту (Доступные валюты: USD, UAH, TRY, EUR, PLN)"
    );
    if (
      curr2 !== USD &&
      curr2 !== TRY &&
      curr2 !== UAH &&
      curr2 !== PLN &&
      curr2 !== EUR
    ) {
      alert("ШОШ Ты ДЕЛАЕШЬ? !!(Доступные валюты: USD, UAH, TRY, EUR, PLN)!!");
    } else {
      break;
    }
  }
  let sum;
  while (true) {
    sum = +getUserAnswer("Введите сумму");
    if (sum && sum > 0) {
      break;
    }
    alert("Больше нуля!!!!!!!!!");
  }
  //Проверка закончилась

  let rate1;

  switch (curr1) {
    case UAH:
      rate1 = UAH_RATE;
      break;
    case USD:
      rate1 = USD_RATE;
      break;
    case PLN:
      rate1 = PLN_RATE;
      break;
    case TRY:
      rate1 = TRY_RATE;
      break;
    case EUR:
      rate1 = EUR_RATE;
      break;
    default:
      break;
  }
  let rate2;
  switch (curr2) {
    case UAH:
      rate2 = UAH_RATE;
      break;
    case USD:
      rate2 = USD_RATE;
      break;
    case PLN:
      rate2 = PLN_RATE;
      break;
    case TRY:
      rate2 = TRY_RATE;
      break;
    case EUR:
      rate2 = EUR_RATE;
      break;
    default:
      break;
  }
  alert((sum / rate1) * rate2);
  let userAns;
  while (true) {
    userAns = getUserAnswer("Хотите продолжить? (Да или Нет)");
    if (userAns === "НЕТ") {
      menu = false;
      break;
    } else if (userAns === "ДА") {
      break;
    } else {
      alert("Введите Да! или Нет!");
    }
  }
}

function getUserAnswer(q, def) {
  return prompt(q, def).toUpperCase().trim();
}

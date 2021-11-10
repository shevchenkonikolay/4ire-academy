let arr = ['roomtoor', null, 'lviv', undefined, 10, 11, 1011, 'november', true, false, [], {}]

// Первый вариант
function filterBy(arr, type) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== type) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log("Первый вариант");
console.log(filterBy(arr, "string"));

// Более компактный вариант
function compactFilterBy(arr, type) {
  return arr.filter((element) => typeof element !== type);
}
console.log("Более компактный вариант");
console.log(compactFilterBy(arr, "number"));
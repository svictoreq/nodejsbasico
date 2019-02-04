const fs = require("fs");
const ops = require("./src/fileops");

const incValue = [];

// number.txt
fs.readFile("./resources/number.txt", "utf-8", (err, list) => {
  if (err) throw err;
  const numbers = list.split("\n").map((n) => Number(n));
  const newList = ops.incrementValues(numbers);
  Object.assign(incValue, newList);
  fs.writeFile("./resources/numbernew.txt", incValue.join("\n"), (err) => {
    if (err) throw err;
    console.log("¡El archivo numbernew.txt ha sido escrito correctamente!");
  });
});


const calValue = [];

// name.txt
fs.readFile("./resources/name.txt", "utf-8", (err, list) => {
  if (err) throw err;
  const names = list.split("\n");
  const calls = ops.callNames(names);
  Object.assign(calValue, calls);
  fs.writeFile("./resources/namenew.txt", calValue.join("\n"), (err) => {
    if (err) throw err;
    console.log("¡El archivo namenew.txt ha sido escrito correctamente!");
  })
});

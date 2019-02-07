const greet = require("./src/greet");

greet.emit("clap");
greet.emit("shout", "VIVA EL AMOR");
greet.emit("call", "Edelman", (name) => {
  console.log(`We're calling ${name}.`);
});

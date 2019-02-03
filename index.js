const call = require("./src/call");

// call.withCallback("Victor Requena", call.sync)

call.withPromise('Victor Requena')
  .then((nombre) => console.log(call.sync(nombre)));

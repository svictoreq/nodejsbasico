const call = require("./src/call");

// call.withPromise("Victor", "Requena")
//   .then((nombreCompleto) => {
//     call.greet(nombreCompleto)
//   });

// Puede ser refactorizado a esto
// usando Async/Await:
async function callWithPromise() {
  const nombreCompleto = await call.withPromise("Victor", "Requena");
  call.greet(nombreCompleto);
}

callWithPromise();

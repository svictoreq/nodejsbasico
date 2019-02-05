const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const q = [
  "¿Cuál es tu primer nombre?: ",
  "¿Cuál es tu primer apellido?: ",
  "¿Cuál es tu edad?: ",
];

const askQuestion = (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const ask = (questions) => {
  return new Promise(async (resolve) => {
    const results = [];
    for (let i=0; i < questions.length; i++) {
      const result = await askQuestion(questions[i]);
      results.push(result);
    }
    rl.close();
    resolve(results);
  });
};

ask(q)
  .then((r) => console.log('\x1b[35m%s\x1b[0m', `Hola ${r[0]} ${r[1]}, tu edad es: ${r[2]}`));

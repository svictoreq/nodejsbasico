const cp = require("child_process");

const exec = (command) => {
  cp.exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error: ${err}`);
      return;
    }

    if (stdout) console.log(`stdout:\n${stdout}`);
    if (stderr) console.error(`stderr:\n${stderr}`);
  });
};

// exec("ls");
exec("node ./src/script.js --base=5");

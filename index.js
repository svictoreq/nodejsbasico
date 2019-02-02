// const add = require("./src/addition");
const sim = require("./src/intensive");

// add.syncSum(1,2);
// add.asyncSum(2,4);

console.log("\x1b[35m%s\x1b[0m", "Sync simulation:");
sim.simulateSync();

console.log("\n");
console.log("\x1b[36m%s\x1b[0m", "Async simulation:");
sim.simulateAsync();

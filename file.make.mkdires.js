var fs = require("fs");
fs.mkdir('tmp/test', { recursive: true }, (err) => {
  if (err) throw err;
  console.log("Finish.");
});
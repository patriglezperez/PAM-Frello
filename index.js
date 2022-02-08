const app = require("express")();
app.use(require("express").json());
app.use("/data", require("./routes"));

app.listen(3000, () => {
  console.log("Working!!!");
});
//

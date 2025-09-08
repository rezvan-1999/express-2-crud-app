require("dotenv").config();

const expess = require("express");
const cors = require("cors");
const productRouter = require("./routes/product.route");
const logger = require("./middleware/product.middleware");

const app = expess();

app.use(cors());
app.use(expess.json());
app.use(expess.urlencoded({ extended: true }));

app.use(logger);

app.get("/", (req, res) => {
  res.send("Welcome to home page!");
});

app.use("/product", productRouter);

app.use((req, res) => {
  res.status(404).json({ msg: "sorry, the page was NOT FOUND!" });
});

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`Your server is runnig at port: ${PORT}`);
});

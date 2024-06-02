import express from "express";
import handlebars from "express-handlebars";
import path from "path";
import morgan from "morgan";
import mainRouter from "./routers/mainRouter.js";

const app = express();
const port = 3000;

// Console logging
app.use(morgan("combined"));

app.use(express.static(path.join(import.meta.dirname, "public")));

// Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path.join(import.meta.dirname, "views/layouts/"),
    partialsDir: path.join(import.meta.dirname, "views/partials/"),
  }),
);
console.log(path.join(import.meta.dirname, "views/partials"));
app.set("view engine", "hbs");
app.set("views", path.join(import.meta.dirname, "views"));

app.use("/", mainRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

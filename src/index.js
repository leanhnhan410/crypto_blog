import express from "express";
import handlebars from "express-handlebars";
import path from "path";
import morgan from "morgan";
import mainRouter from "./routers/mainRouter.js";
import hbs from "hbs";
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import crypto from 'crypto';
import session from "express-session";
import flash from "connect-flash";

const app = express();
const port = 3000;

// Lấy __dirname trong ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Kết nối MongoDB
mongoose.connect('mongodb://localhost:27017/trade_crypto', {
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Console logging
app.use(morgan('combined'));

// Thiết lập đường dẫn đến static files
app.use(express.static(path.join(__dirname, 'public')));

// Lấy data trong body
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());


const secret = crypto.randomBytes(64).toString('hex');

// Session middleware to handle sessions
app.use(session({
  secret: secret, // Secret key for signing the session ID cookie
  resave: false, // Don't save session if unmodified
  saveUninitialized: true, // Save new sessions
  cookie: { secure: false } // Set to true if using HTTPS
}));

// Flash middleware to handle flash messages
app.use(flash());

// Template engine
app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts/'),
    partialsDir: [
      path.join(__dirname, 'views/partials/'),
      path.join(__dirname, 'views/admin/partials/'),
    ],
  }),
);

// Đăng ký partials cho thư mục views/admin/partials
hbs.registerPartials(path.join(__dirname, 'views/admin/partials/'));
console.log(path.join(__dirname, 'views/admin/partials/'));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', mainRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

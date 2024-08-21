import express from "express";
import bcrypt from "bcryptjs";

const router = express.Router();

router.get("/login", (req, res) => {
  // Render the login page
  res.render("login", { title: "Login", messages: req.flash('error_msg') });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Giả sử bạn có một hàm để tìm người dùng theo email
  const user = await findUserByEmail(email);

  if (!user) {
    // If user not found, flash a message and redirect to login page
    req.flash('error_msg', 'No user found with that email');
    return res.redirect('/login');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (isMatch) {
    // If password matches, save user to session and redirect to dashboard
    req.session.user = user;
    res.redirect('/admin/dashboard');
  } else {
    // If password doesn't match, flash a message and redirect to login page
    req.flash('error_msg', 'Password incorrect');
    res.redirect('/login');
  }
});

router.get("/logout", (req, res) => {
  // Destroy the session and redirect to login page
  req.session.destroy(err => {
    if (err) {
      return res.redirect('/admin/dashboard');
    }
    res.clearCookie('connect.sid');
    res.redirect('/login');
  });
});

export default router;

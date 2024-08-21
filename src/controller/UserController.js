import findUserByEmail from '../services/userService.js';
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
/**
 *
 */
class UserController {
  async getRegisterPage(req, res) {
    // get data

    // return page
    res.render("user/register", {
      title: "Register",
    });
  }

  async getLoginPage(req, res) {
    // get data

    // return page
    res.render("user/user-login", {
      title: "Login",
    });
  }

  async doLogin(req, res) {
    const { email, password, remember_me } = req.body;

    // Giả sử bạn có một hàm để tìm người dùng theo email
    const user = await findUserByEmail(email);

    const rememberMe = req.body.remember_me ? true : false;

    console.log(user);

    if (!user) {
      // If user not found, flash a message and redirect to login page
      req.flash("error_msg", "No user found with that email");
      return res.redirect("/user/login");
    }


    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      // Tạo JWT token
      const token = jwt.sign({ id: user._id }, 'yourSecretKey', {
        expiresIn: remember_me ? '7d' : '1h', // Nếu Remember Me được chọn thì token có thời hạn 7 ngày, nếu không thì chỉ 1 giờ.
      });

      // Đặt cookie với token
      res.cookie('auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: remember_me ? 7 * 24 * 60 * 60 * 1000 : 60 * 60 * 1000, // 7 ngày hoặc 1 giờ
      });

      // If password matches, save user to session and redirect to dashboard
      req.session.user = user;
      res.redirect("/user/profile");
    } else {
      // If password doesn't match, flash a message and redirect to login page
      req.flash("error_msg", "Password incorrect");
      res.redirect("/user/login");
    }
  }

  async getProfilePage(req, res) {
    // get data

    // return page
    res.render("user/user-dashboard", {
      title: "Dashboard",
    });
  }

  async doLogout(req, res) {
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
        return res.status(500).send('Error during logout.');
      }

      // Xóa cookie của session
      res.clearCookie('connect.sid'); // connect.sid là tên mặc định của cookie session trong Express

      // Chuyển hướng người dùng đến trang login sau khi logout
      res.redirect('/user/login');
    });
  }
}

export default new UserController();

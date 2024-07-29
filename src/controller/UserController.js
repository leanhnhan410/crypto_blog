/**
 *
 */
class UserController {
  async getRegisterPage(req, res) {
    // get data

    // return page
    res.render("user/user-register", {
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

  async getProfilePage(req, res) {
    // get data

    // return page
    res.render("user/user-dashboard", {
      title: "Dashboard",
    });
  }

  async getLogoutPage(req, res) {
    // get data

    // return page
    res.render("user/user-logout", {
      title: "Logout",
    });
  }
}

export default new UserController();

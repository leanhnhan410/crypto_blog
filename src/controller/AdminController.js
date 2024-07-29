import User from '../models/user.js';

/**
 *
 */
class AdminController {
  async getDashboardPage(req, res) {
    // get data
    try {
      const users = await User.find().lean(); // Lấy tất cả người dùng
      console.log(users);
      res.render('admin/page/dashboard', { title: 'All Users', users }); // Truyền dữ liệu người dùng tới view
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while fetching the users.');
    }
  }

  async getManagerPostPage(req, res) {
    // get data
    
    // return page
    res.render("admin/page/post/management-post", {
      title: "Admin Manager Post",
    });
  }

  async getRegisterUserPage(req, res) {
    // get data

    // return page
    res.render("admin/page/add-user", {
      title: "Add User",
    });
  }

  async registerUser(req, res) {
    // get data
    const { email } = req.body;
    console.log(email);

    try {
      const newUser = new User({ email });
      await newUser.save();
      res.redirect('/admin/dashboard');
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while adding the user.');
    }
  }
}

export default new AdminController();

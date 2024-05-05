/**
 * 
 */
class AdminController {
    
    async getDashboardPage(req, res) {
     // get data
  
      // return page
      res.render('admin/page/dashboard', {
        title: 'Admin Dashboard',
       
      });
    }

    async getManagerPostPage(req, res) {
      // get data
   
       // return page
       res.render('admin/page/post/management-post', {
         title: 'Admin Manager Post',
        
       });
     }


  }
  
  export default new AdminController;
  
/**
 * 
 */
class SiteController {
    async getIndexPage(req, res) {
      // get data
  
      // return page
      res.render('pages/home', {
        title: 'Home',
       
      });
    }

    async getCategoryPage(req, res) {
      // get data
  
      // return page
      res.render('pages/home', {
        title: 'Category',
       
      });
    }

    async getNewsPage(req, res) {
      // get data
  
      // return page
      res.render('pages/home', {
        title: 'News',
       
      });
    }

    async getSearchPage(req, res) {
      // get data
  
      // return page
      res.render('pages/home', {
        title: 'Search',
       
      });
    }
  }
  
  export default new SiteController;
  
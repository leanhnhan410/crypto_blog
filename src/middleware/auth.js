export const ensureAuthenticated = (req, res, next) => {
  
    if (req.session.user) {
      // If user is logged in, proceed to the next middleware or route handler
      return next();
    } else {
      // If user is not logged in, redirect to the login page with a flash message
      req.flash('error_msg', 'Please log in to view that resource');
      res.redirect('/user/login');
    }
  };
  
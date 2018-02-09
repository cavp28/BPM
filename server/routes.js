// module.exports = function(app, passport){
//
//   // process the signup form
//   app.post('/signup', passport.authenticate('local-signup', {
//       successRedirect : '/dashboard', // redirect to the secure profile section
//       failureRedirect : '/signup', // redirect back to the signup page if there is an error
//       failureFlash : true // allow flash messages
//   }));
//
//   app.get('/', isLoggedIn, (req, res) => {
//     //Render main dashboard.
//     res.render('dashboard.hbs', {
//       user: req.user
//     });
//   });
//
//   app.get('/login', (req, res) => {
//     //Render the login view
//     res.render('login.hbs', { message: req.flash('loginMessage') });
//   });
//
//   app.get('/signup', (req, res) => {
//     //Render the signup view
//     res.render('signup.hbs', { message: req.flash('signupMessage') });
//   });
//
//   app.get('/logout', function(req, res) {
//     req.logout();
//     res.redirect('/login');
//   });
// };
//
// function isLoggedIn(req, res, next){
//   // Check if the user is authenticated in the session
//     if (req.isAuthenticated())
//         return next();
//
//     //If they aren't redirect them to the login page
//     res.redirect('/login');
// }

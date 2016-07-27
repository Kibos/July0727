module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  


  router.get('/', function(req, res) {
    res.render('index', {
      loginFailed: false
    });
  });

  router.get('/projects', function(req, res) {
    res.render('projects');
  });

  router.post('/projects', function(req, res) {
    var email = req.body.email;
    var password = req.body.password;

    app.models.User.login({
      email: email,
      password: password
    }, 'user', function(err, token) {
      if (err)
        return res.render('index', {
          email: email,
          password: password,
          loginFailed: true
        });

      token = token.toJSON();

      res.render('projects', {
        username: token.user.username,
        accessToken: token.id
      });
    });
  });

  router.get('/logout', function(req, res) {
    var AccessToken = app.models.AccessToken;
    var token = new AccessToken({id: req.query['access_token']});
    token.destroy();

    res.redirect('/');
  });


  server.use(router);
};

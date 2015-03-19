module.exports = function(app, log, io){

  app.get('/', function(req, res){
  	res.render('index');
  });


  /*
  * This service will be used to render the page used to send the alert.
  */
  app.get('/deal/:username/:code', function(req, res){
    console.log('username; ' + req.params.username)
    console.log('code: ' + req.params.code)
    res.render('index', {username: req.params.username, code: req.params.code});
  });



  app.get('*', function(req, res){
    res.render('index');
  });
  //9342278777

};
module.exports = function(app, express){

  var config = this;
  var flash = require('connect-flash');
  var params = require('./config-params');

  //generic config
  app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', './views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.session({ secret: params.session_secret , cookie: {maxAge: 6000000}}));
    app.use(function(req, res, next) {
        next();
    });    
    app.use(flash());
    app.use(express.methodOverride());
    app.use(express.static('./public'));
    app.use(app.router);
  });

  //env specific config
  app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  });

  app.configure('production', function(){
    app.use(express.errorHandler());
  });

  return config;
};
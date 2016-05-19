var restify = require('restify');
var server = restify.createServer({ name: 'usuarios' });

var Users = require('./models/user');


server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.fullResponse());


/**
 * Rutas
 */

// Mostrar todos
server.get('/users', function(req, res, next) {
    res.send(200, Users.allUsers());
    next();
});

// Mostrar uno en particular
server.get('/users/:username', function(req, res, next) {
    var uname = req.params.username || '';
    res.send(200, Users.findUser(uname) || '');
    next();
});

// Agregar uno  (usar req.body para obtener los datos)
server.post('/users/new', function(req, res, next) {
    res.send(404);
    next();
});

// Cambiar el password de un usuario
server.put('/users/:username/change', function(req, res, next) {
    res.send(404);
    next();
});

// Borrar un usuario
server.del('/users/:username/delete', function(req, res, next) {
    res.send(404);
    next();
});


server.listen(8080, 'localhost', function() {
    console.log('corriendo el server %s en %s', server.name, server.url);
});
const SocketController = require('../app/controllers/SocketController');

function routers(app) {
    app.use('/message', SocketController.index);
}

module.exports = routers;

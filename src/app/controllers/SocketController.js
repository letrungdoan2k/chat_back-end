const User = require('../models/User');

class SocketController {
    index() {
        User.find({}, function (err, users) {
            if (err) {
                res.status(400).json({ message: 'Error!!' });
            } else {
                res.status(200).json(users);
            }
        });

        let content = []

        io.on("connection", function (socket) {
            console.log('ON');
          
            socket.on("disconnect", function () {});
            //server lắng nghe dữ liệu từ client
            socket.join("some room");
            socket.on("Client-sent-data", function (name , message) {
              content = [...content, {name: name, message: message}]
              //sau khi lắng nghe dữ liệu, server phát lại dữ liệu này đến các client khác
              io.emit("Server-sent-data", content);
            });
            socket.emit("Server-sent-data", content);
          });
    }
}

module.exports = new SocketController();

// require('./server/config/mongoose.config');

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const server = app.listen(port, () => console.log(`The server is all fired up on port ${port}`));

// const io = require("socket.io")(server);

// io.on("connection", socket => {
//     console.log(socket.id)
//     console.log('Nice to meet you (hand shake)')
//     socket.on("event_from_client", data => {
//         socket.broadcast.emit("send_data", data);
//     })
// })
require('./server/config/mongoose.config');
const express = require('express');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const app = express();

const server = app.listen(8000, () =>
    console.log('The server is all fired up on port 8000')
);

const io = require('socket.io')(server, { cors: true });
io.on("connection", socket => {
    console.log(socket.id)
    console.log('Nice to meet you (hand shake)')
    socket.on("event_from_client", data => {
        socket.broadcast.emit("send_data", data);
    })
})
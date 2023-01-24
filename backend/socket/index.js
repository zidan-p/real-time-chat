const { Server } = require("socket.io");
const axios = require("axios");


const io = new Server({cors: {origin : "*"}});

io.on("connection", (socket) => {
    
    //bisa user tlah masuk
    console.log(`id User : ${socket.id}`);

    // bisa menerima pesan
    //struktur data
    socket.on('send-message', async data => {
        try {
            console.log(data);
            let result = await axios.post('http://127.0.0.1:3004/message/',{
                message: data.message,
                roomId: data.roomId,
                userId: data.sender.id
            });
            console.log('setelah elakuakn post axios');
            console.log(result);
            socket
                .to(data.roomId)
                .emit("emit-room-"+data.roomId, data);
        } catch (error) {
            console.error(error)
        }
    })



    //bila dalam database sudat terhubung, maka lakukan inisialisasi room
    //"a merupakan anggora room 'a', 'b' dan 'c'"
    socket.on('init-room', roomIdList => {
        roomIdList.forEach(room => {
            console.log("room telah diini toleh user "+socket.id);
            socket.join(room);
        });
    })

    socket.on('join-room', data => {
        socket.join(data.roomId);
        socket.to(data.roomId).emit("emit-room-"+data.roomId ,`${data.name} join grup ini`);
    })
});

module.exports = io 
import {io} from "socket.io-client"

let socket;
let setSocket = (url) => {
    socket = io(url);
}
let joinRoom = (roomId, userId) => {
    socket.emit('join-room', {
        roomId : roomId,
        userId : userId
    })
}
let initRoom = (roomIdList = []) => {
    socket.emit('init-room', roomIdList)
}


export {socket, setSocket, joinRoom, initRoom}
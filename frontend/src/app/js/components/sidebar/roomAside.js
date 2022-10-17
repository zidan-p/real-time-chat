import {roomList} from "./../../DOM_component/dom_component"

//room bagian samping
class RoomAside{
    roomName
    newMsg
    roomId

    // --- dom element ---
    asideRoomContainer
    nameContainer
    newMsgContainer

    constructor({roomName = "", newMsg = "", roomId}){
        this.roomName = roomName
        this.roomId = roomId
        this.newMsg = newMsg
    }

    setDom(){
        this.asideRoomContainer = document.querySelector(`#room-${this.roomId}-side`);
        this.nameContainer = this.asideRoomContainer.querySelector('.room-name-aside');
        this.newMsgContainer = this.asideRoomContainer.querySelector('.new-msg-container');
    }
    
    createElement(){
        return roomList({
            isActive: false,
            roomName: this.roomName,
            newMsg : this.newMsg,
            roomId : this.roomId
        })
    }
}

export {RoomAside}
import {roomList} from "./../../DOM_component/dom_component"

//room bagian samping
class RoomAside{
    roomName
    newMsg
    roomId

    // --- dom ---
    asideRoomContainer
    nameContainer
    newMsgContainer

    // -- element value --
    asideRoomContainerElement

    constructor({roomName = "", newMsg = "", roomId}){
        this.roomName = roomName
        this.roomId = roomId
        this.newMsg = newMsg
    }

    // -- dom manipulation --
    setDomContainer(){this.asideRoomContainer = document.querySelector(`#room-${this.roomId}-side`);}
    unsetDomContainer(){this.asideRoomContainer = null}
    fillElementDomContainer(){this.asideRoomContainer.append(this.asideRoomContainerElement);}
    setDom(){
        this.nameContainer = this.asideRoomContainer.querySelector('.room-name-aside');
        this.newMsgContainer = this.asideRoomContainer.querySelector('.new-msg-container');
    }
    usetDom(){
        this.nameContainer = null
        this.newMsgContainer = null
    }
    deleteDom(){this.asideRoomContainer.innerHTML = ``} //semua dom baik container maupun isi

    // -- element manipulation --
    createElement(){return this.createElement().bind(this)} //perlu di bind supaya dapat mengakses elemen object
    resetElement(){this.asideRoomContainerElement = this.createElement()}
    setCurrentElement(){this.asideRoomContainerElement = this.asideRoomContainer.cloneNode(true)}
    deleteElement(){this.containerElement = null}
    createElement(){
        return roomList({
            isActive: false,
            roomName: this.roomName,
            newMsg : this.newMsg,
            roomId : this.roomId
        })
    }

    //karena ini hanya digunakan untuk mengakses dan mendapat , dan tidak sebagai container, maka
    //hanya akan saya beri delete dan update
    deleteThisDomAndElement(){
        this.deleteDom();
        this.deleteElement();
    }

}

export {RoomAside}
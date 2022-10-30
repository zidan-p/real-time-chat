import {roomList} from "./../../DOM_component/dom_component"



//room bagian samping
class RoomAside{
    roomName
    newMsg
    roomId

    // --- dom ---
    container
    
    // -- element value --
    containerElement
    nameContainerElement
    newMsgContainerElement

    constructor({roomName = "", newMsg = "", roomId}){
        this.roomName = roomName
        this.roomId = roomId
        this.newMsg = newMsg
    }

    // -- element manipulation --
    createElement(){
        return roomList({
            isActive: false,
            roomName: this.roomName,
            newMsg : this.newMsg,
            roomId : this.roomId
        })
    } //perlu di bind supaya dapat mengakses elemen object
    resetElement(){this.containerElement = this.createElement()}
    deleteElement(){this.containerElement = null}
    setPseudoElement(){
        this.nameContainerElement = this.containerElement.querySelector('.room-name-aside');
        this.newMsgContainerElement = this.containerElement.querySelector('.new-msg-container');
    }
    unsetPseudoElement(){
        this.nameContainerElement = null;
        this.newMsgContainerElement = null
    }
    setActive(){
        this.containerElement.classList.add("bg-vscode-3")
        this.containerElement.classList.add("border-l");
        this.containerElement.classList.add("border-l-gray-200");
        
    }
    setInactive(){
        this.containerElement.classList.remove("bg-vscode-3")
        this.containerElement.classList.remove("border-l");
        this.containerElement.classList.remove("border-l-gray-200");
    }

    prepareElement(){
        this.resetElement();
        this.setPseudoElement();
    }

    fillCurrentElementDom(){
        this.nameContainerElement = this.roomName;
        this.newMsgContainerElement = this.newMsg;
    }


    // --- event ---
    onClick(callback){
        this.containerElement.addEventListener('click', ()=>{
            callback(this.roomId);
        })
    }

}

export {RoomAside}
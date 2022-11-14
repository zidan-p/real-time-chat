import {roomList} from "./../../DOM_component/dom_component"
import {ComponentStruct} from "./../../core/component_struct";


//room bagian samping
class RoomAside extends ComponentStruct{
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
        super();
        this.roomName = roomName
        this.roomId = roomId
        this.newMsg = newMsg

        this.defineCreateElement(()=>{
            return roomList({
                isActive: false,
                roomName: this.roomName,
                newMsg : this.newMsg,
                roomId : this.roomId
            })
        })
        this.defineElementStruct({
            nameContainer : ".room-name-aside",
            newMsgContainer : ".new-msg-container"
        })
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
        this.elementStruct.nameContainer = this.roomName;
        this.elementStruct.newMsgContainer = this.newMsg;
    }


    // --- event ---
    onClick(callback){
        this.containerElement.addEventListener('click', ()=>{
            callback(this.roomId);
        })
    }

}

export {RoomAside}
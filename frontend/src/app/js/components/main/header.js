import {header} from "./../../DOM_component/dom_component";

class Header{
    roomName
    roomIcon

    containerElement // elemen header dari html

    // --- dom elemen ---
    container
    nameContainer
    iconContainer

    constructor({roomName = "", roomIcon = ""}){
        this.roomName = roomName;
        this.roomIcon = roomIcon;

    }
    
    setDom(){
        this.container = document.querySelector('#header')
        this.nameContainer = this.container.querySelector('#header-room-name')
    }

    swapOut(){
        this.containerElement = this.container.cloneNode(true);
        this.container.innerHTML = ""
    }

    createElement(){
        return header({
            roomName : this.roomName,
            roomIcon : this.roomIcon
        })
    }

    setHeader(){

    }
}

export {Header}
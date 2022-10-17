import {header} from "./../../DOM_component/dom_component";

class Header{
    roomName
    roomIcon

    containerElement // elemen header dari html

    // --- dom elemen ---
    container

    constructor({roomName = "", roomIcon = ""}){
        this.roomName = roomName;
        this.roomIcon = roomIcon;

        this.container = document.querySelector('#header')
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
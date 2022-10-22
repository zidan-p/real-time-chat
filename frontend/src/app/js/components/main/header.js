import {header} from "./../../DOM_component/dom_component";
import {StateControl} from "../stateControl";


class Header{
    roomName
    roomIcon

    
    // --- dom value ---
    container
    
    // -- elemen value --
    containerElement
    nameContainerElement
    iconContainerElement

    constructor({roomName = "", roomIcon = ""}){
        this.roomName = roomName;
        this.roomIcon = roomIcon;

    }

    // -- element manipulation --
    createElement(){
        return header({
            roomName : this.roomName,
            roomIcon : this.roomIcon
        })
    }
    resetElement(){this.containerElement = this.createElement()}
    deleteElement(){this.containerElement = null}
    setPseudoElement(){
        this.nameContainerElement = this.containerElement.querySelector('#header-room-name');
        this.iconContainerElement = "";
    }
    unsetPseudoElement(){
        this.nameContainerElement = null
        this.iconContainerElement = null
    }

    prepareElement(){
        this.resetElement();
        this.setPseudoElement();
        this.fillCurrentElementDom();
    }


    // -- state controll --
    fillCurrentElementDom(){
        this.nameContainerElement = this.roomName
        this.iconContainerElement = this.icon
    }

    slide(){
        this.fillCurrentElementDom();
    }

}

export {Header}
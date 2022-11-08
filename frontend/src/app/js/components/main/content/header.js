import {header} from "../../../DOM_component/dom_component";
// import {StateControl} from "../stateControl";


class Header{
    roomName
    roomIcon

    
    // --- dom value ---
    container
    
    // -- elemen value --
    containerElement
    nameContainerElement
    buttonLogoutElement
    buttonInfoElement

    constructor({roomName = ""}){
        this.roomName = roomName;

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
        this.buttonInfoElement = this.containerElement.querySelector('#info-header');
        this.buttonLogoutElement = this.containerElement.querySelector('#log-out-header')
    }
    unsetPseudoElement(){
        this.nameContainerElement = null
        this.buttonInfoElement = null
        this.buttonLogoutElement = null
    }

    prepareElement(){
        this.resetElement();
        this.setPseudoElement();
        this.fillCurrentElementDom();
    }


    // -- state controll --
    fillCurrentElementDom(){
        this.nameContainerElement = this.roomName
    }

    // -- event list --
    onInfoClick(callback){
        
    }

    onLogoutClick(callback){

    }
}

export {Header}
import {header} from "./../../DOM_component/dom_component";
import {StateControl} from "../stateControl";


class Header extends StateControl{
    roomName
    roomIcon

    
    // --- dom value ---
    container
    nameContainer
    iconContainer
    
    // -- elemen value --
    containerElement 

    constructor({roomName = "", roomIcon = ""}){
        this.roomName = roomName;
        this.roomIcon = roomIcon;

    }

    // -- dom manipulation --
    setDomContainer(){this.container = document.querySelector('#header')}
    unsetDomContainer(){this.container = null}
    fillElementDomContainer(){this.container.append(this.containerElement);}
    setDom(){
        this.nameContainer = this.container.querySelector('#header-room-name')
        this.iconContainer = ""
    }
    unsetDom(){
        this.nameContainer = null;
        this.iconContainer = null
    }
    deleteDom(){this.container.innerHTML = ``} //semua dom baik container maupun isi
    restoreDom(){this.container.innerHTML = this.containerElement.firstChild.innerHTML}

    // -- element manipulation --
    createElement(){
        return header({
            roomName : this.roomName,
            roomIcon : this.roomIcon
        })
    }
    resetElement(){this.containerElement = this.createElement().bind(this)}
    setCurrentElement(){this.containerElement = this.container.cloneNode(true)}
    deleteElement(){this.containerElement = null}


    // -- state controll --
    fillCurrentElementDom(){
        this.nameContainer = this.roomName
        this.iconContainer = this.icon
    }

    slide(){
        this.fillCurrentElementDom();
    }

}

export {Header}
import {header} from "../../../DOM_component/dom_component";
import {ComponentStruct} from "../../../core/component_struct";


class Header extends ComponentStruct{
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
        super()
        this.roomName = roomName;

        // -- define constructor --
        this.defineCreateElement(()=>{
            return header({
                roomName : this.roomName,
                roomIcon : this.roomIcon
            })
        });

        this.defineElementStruct({
            nameContainer : "#header-room-name",
            buttonInfo : "#info-header",
            buttonOut : "#out-header"
        })
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
        callback(this.elementStruct.buttonInfo);
    }

    onLogoutClick(callback){

    }
}

export {Header}
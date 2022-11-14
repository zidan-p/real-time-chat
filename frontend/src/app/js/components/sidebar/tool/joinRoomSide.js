import {joinRoomSideContent} from "./../../../DOM_component/dom_component"
import {ComponentStruct} from "../../../core/component_struct";

class JoinRoomSide extends ComponentStruct{
    // -- dom - element --
    containerElement

    
    // -- data value --
    active = false
    foundedRoom


    constructor(){
        super()
        // -- define constructor --
        this.defineCreateElement(joinRoomSideContent);
        this.defineElementStruct({
            idRoomInput : "#id-room-input",
            form : "form",
            sendBtn : "button",
            alertNotFoundContainer : "#found-alert-room",
            alertFoundContainer : "#not-found-alert-room",
            foundedRoomContainer : "span"
        })
    }


    // -- state control --
    setActive(){
        this.active = true
    }
    setInactive(){
        this.active = false
        this.resetElement();
    }
    prepareElement(){
        this.resetElement();
        this.setPseudoElement();
    }

    setFound(bool){
        if(!bool){
            this.elementStruct.alertNotFoundContainer.classList.toggle('hidden')
            return
        }
        this.elementStruct.alertFoundContainer.toggle('hidden')
        this.elementStruct.foundedRoomContainer.innerHTML = this.foundedRoom
    }


    // -- event --
    setEvent(){
        this.elementStruct.form.addEventListener('submit',(e)=>{
            //todo: buat emit untuk ini
        })
    }
}


export {JoinRoomSide}
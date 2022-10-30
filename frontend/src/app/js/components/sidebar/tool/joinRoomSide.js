import {joinRoomSideContent} from "./../../../DOM_component/dom_component"

class JoinRoomSide{
    // -- dom - element --
    containerElement
    idRoomInput
    form
    sendBtn
    alertNotFoundContainer
    alertFoundContainer
    foundedRoomContainer
    
    // -- data value --
    active = false
    foundedRoom


    constructor(){

        
    }

    // -- element manipulation --
    createElement(){return joinRoomSideContent();}
    resetElement(){this.containerElement = this.createElement()}
    deleteElement(){this.containerElement = null}
    setPseudoElement(){
        this.idRoomInput = this.containerElement.querySelector('.id-room-input')
        this.form = this.containerElement.querySelector('form');
        this.sendBtn = this.containerElement.querySelector('button')
        
        this.alertFoundContainer = this.containerElement.querySelector('#found-alert-room');
        this.alertNotFoundContainer = this.containerElement.querySelector('#not-found-alert-room')
        this.foundedRoomContainer = this.alertNotFoundContainer.querySelector('span');
    }
    unsetPseudoElement(){
        this.idRoomInput = null
        this.form = null
        this.sendBtn = null

        this.alertFoundContainer = null
        this.alertNotFoundContainer = null
        this.foundedRoomContainer = null
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
            this.alertNotFoundContainer.classList.toggle('hidden')
            return
        }
        this.alertFoundContainer.toggle('hidden')
        this.foundedRoomContainer.innerHTML = this.foundedRoom
    }


    // -- event --
    setEvent(){
        this.form.addEventListener('submit',(e)=>{
            //todo: buat emit untuk ini
        })
    }
}


export {JoinRoomSide}
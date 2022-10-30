import {createRoomSideContent} from "./../../../DOM_component/dom_component"


class CreateRoomSide{
    // -- dom - element --
    containerElement
    roomNameContainerElement
    roomDescriptionContainerElement
    idCreatorContainerElement
    saveBtn
    form

    // -- value data --
    userData
    active = false

    constructor(){

        //dapatkan id creator
        this.getUserData();
    }

    // -- element manipulation --
    createElement(){return createRoomSideContent();}
    resetElement(){this.containerElement = this.createElement()}
    deleteElement(){this.containerElement = null}
    setPseudoElement(){
        this.roomNameContainerElement = this.containerElement.querySelector('.room-name-side')
        this.roomDescriptionContainerElement = this.containerElement.querySelector('.room-description-side')
        this.saveBtn = this.containerElement.querySelector('button')
        this.form = this.containerElement.querySelector('form')
        this.idCreatorContainerElement = this.containerElement.querySelector('.id-creator');
    }
    unsetPseudoElement(){
        this.roomNameContainerElement = null
        this.roomDescriptionContainerElement = null
        this.saveBtn = null
        this.form = null
        this.idCreatorContainerElement = null
    }

    // -- state --
    prepareElement(){
        this.resetElement();
        this.setPseudoElement();
        this.fillCurrentElementDom();
    }
    fillCurrentElementDom(){
        this.idCreatorContainerElement.value = this.userData.id

    }

    // -- state control --
    setActive(){
        this.active = true
         
    }
    setInactive(){
        this.active = false
        this.resetElement();
    }

    // -- event --
    setEvent(){
        this.form.addEventListener('submit',(e)=>{
            e.preventDefault()
            //todo: buat emit untuk ini
        })
    }

    // -- functional behavior --
    getUserData(){
        this.userData = JSON.stringify(
            localStorage.getItem('userData')
        )
    }

}

export {CreateRoomSide}
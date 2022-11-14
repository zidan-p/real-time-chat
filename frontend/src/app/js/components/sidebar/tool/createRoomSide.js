import {createRoomSideContent} from "./../../../DOM_component/dom_component"
import {ComponentStruct} from "../../../core/component_struct";

class CreateRoomSide extends ComponentStruct{
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
        super()

        //dapatkan id creator
        this.getUserData();

        // -- define constructor --
        this.defineCreateElement(createRoomSideContent);
        this.defineElementStruct({
            roomNameContainerElement : ".room-name-side",
            roomDescriptionContainerElement : ".room-description-side",
            idCreatorContainerElement : ".id-creator",
            saveBtn : "button",
            form : "form"
        })
    }

    // -- state --
    prepareElement(){
        this.resetElement();
        this.setPseudoElement();
        this.fillCurrentElementDom();
    }
    fillCurrentElementDom(){
        this.elementStruct.idCreatorContainerElement.value = this.userData.id

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
        this.elementStruct.form.addEventListener('submit',(e)=>{
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
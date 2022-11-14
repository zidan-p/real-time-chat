import {settingSideContent} from "./../../../DOM_component/dom_component"
import {ComponentStruct} from "../../../core/component_struct"

class SettingSide extends ComponentStruct{
    containerElement
    globalOnEnterSubmitInput
    fontSizeInput
    saveBtn
    form

    // -- data value --
    active = false

    //ini mungkin akan diberi default settng
    constructor(){
        super()
        // -- define constructor --
        this.defineCreateElement(settingSideContent);
        this.defineElementStruct({
            globalOnEnterSubmitInput : "#set-global-on-enter-submit",
            fontSizeInput : "#setting-font-size",
            saveBtn : "button",
            form : "form"
        })
    }
    prepareElement(){
        this.resetElement();
        this.setPseudoElement();
    }

    // -- state control --
    setActive(){
        this.active = true
         
    }
    setInactive(){
        this.active = false
        
    }

    //-- set event --
    setEvent(){
        this.elementStruct.form.addEventListener("submit",(e)=>{
            e.preventDefault();
            //TODO: buat emit untuk ini
        })
    }

}

export {SettingSide}
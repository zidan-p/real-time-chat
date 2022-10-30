import {settingSideContent} from "./../../../DOM_component/dom_component"

class SettingSide{
    containerElement
    globalOnEnterSubmitInput
    fontSizeInput
    saveBtn
    form

    // -- data value --
    active = false

    //ini mungkin akan diberi default settng
    constructor(){

    }
    createElement(){return settingSideContent();}
    resetElement(){this.containerElement = this.createElement()}
    deleteElement(){this.containerElement = null}
    setPseudoElement(){
        this.globalOnEnterSubmitInput = this.containerElement.querySelector('#set-global-on-enter-submit')
        this.fontSizeInput = this.containerElement.querySelector('#setting-font-size')
        this.saveBtn = this.containerElement.querySelector('button')
        this.form = this.containerElement.querySelector('form')
    }
    unsetPseudoElement(){
        
        this.globalOnEnterSubmitInput = null
        this.fontSizeInput = null
        this.saveBtn = null
        this.form = null
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
        this.form.addEventListener("submit",(e)=>{
            e.preventDefault();
            //TODO: buat emit untuk ini
        })
    }

}

export {SettingSide}
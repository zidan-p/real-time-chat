import {inputMessage} from "./../../DOM_component/dom_component"
import {StateControl} from "../stateControl";

class InputMessage extends StateControl{
    currentMsg
    idDomElement
    userId

    //---- dom value -----
    container
    input
    sendBtn
    idContainer // id user
    form

    // -- element vale --
    containerElement

    constructor({currentMsg = "", userId = ""}){
        this.currentMsg = currentMsg;
        this.userId = userId;

    }
    // -- dom manipulation --
    setDomContainer(){this.container = document.querySelector('#input-msg-container')}
    unsetDomContainer(){this.container = null}
    fillElementDomContainer(){this.container.append(this.containerElement);}
    setDom(){
        this.input = this.container.querySelector('input');
        this.form = this.container.querySelector('form'); //form untuk submit
        this.idContainer = this.container.querySelector('.user-id');
        this.sendBtn = this.container.querySelector('button');
    }
    unsetDom(){
        this.input = null
        this.form = null
        this.idContainer = null
        this.sendBtn = null
    }
    deleteDom(){this.container.innerHTML = ``} //semua dom baik container maupun isi
    restoreDom(){this.container.innerHTML = this.containerElement.firstChild.innerHTML}

    // -- element manipulation --
    createElement(){return inputMessage(this.currentMsg);}
    resetElement(){this.containerElement = inputMessage(this.currentMsg)}
    setCurrentElement(){this.containerElement = this.container.cloneNode(true)}
    deleteElement(){this.containerElement = null}


    // -- state control --
    fillCurrentElementDom(){
        this.idContainer.innerHTML = "#" + this.userId;
        this.input.value = this.currentMsg
    }

    slide(){
        this.fillCurrentElementDom();
    }

    onSubmitForm(callback){ //berisi callback untuk menjalankan fungsi yg dikirim nanti
        this.form.addEventListener('submit',(e)=>{
            e.preventDefault();
            callback({
                message: this.input.value
            });
            this.input.value = "";
        })
        this.sendBtn.addEventListener('click', (e)=> {
            e.preventDefault();
            callback({
                message: this.input.value
            });
            this.input.value = "";
        })
    }


}


export {InputMessage}
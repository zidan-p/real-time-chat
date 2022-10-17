import {inputMessage} from "./../DOM_component/dom_component"


class inputMessage{
    currentMsg
    idDomElement

    //---- dom element -----
    input
    sendBtn
    idContainer // id user
    container
    form

    constructor({idDomElement = "",currentMsg = ""}){
        this.currentMsg = currentMsg;
        this.idDomElement = idDomElement;
    }

    setDom(){
        this.container = document.querySelector('#'+this.idDomElement)
        this.input = this.container.querySelector('input');
        this.form = this.container.querySelector('form'); //form untuk submit
        this.idContainer = this.container.querySelector('.user-id');
        this.sendBtn = this.container.querySelector('button');
    }

    onSubmitForm(callback){ //berisi callback untuk menjalankan fungsi yg dikirim nanti
        this.input.addEventListener('submit',()=>{
            callback();
        })
        this.sendBtn.addEventListener('click', ()=> {
            callback();
        })
    }

    getElement(){
        return inputMessage(this.currentMsg);
    }


}
import {inputMessage} from "./../../DOM_component/dom_component"


class InputMessage{
    currentMsg
    idDomElement
    userId

    //---- dom element -----
    container
    input
    sendBtn
    idContainer // id user
    form

    constructor({currentMsg = "", userId = ""}){
        this.currentMsg = currentMsg;
        this.userId = userId;

    }

    setDom(){
        this.container = document.querySelector('#input-msg-container')
        console.log(this.container);
        this.input = this.container.querySelector('input');
        this.form = this.container.querySelector('form'); //form untuk submit
        this.idContainer = this.container.querySelector('.user-id');
        this.sendBtn = this.container.querySelector('button');
    }

    fillDomElement(){
        this.idContainer.innerHTML = "#" + this.userId;
        this.input.value = this.currentMsg
    }

    onSubmitForm(callback){ //berisi callback untuk menjalankan fungsi yg dikirim nanti
        this.form.addEventListener('submit',(e)=>{
            e.preventDefault();
            callback();
            this.input.value = "";
        })
        this.sendBtn.addEventListener('click', (e)=> {
            e.preventDefault();
            callback();
            this.input.value = "";
        })
    }

    createElement(){
        return inputMessage(this.currentMsg);
    }


}


export {InputMessage}
import {inputMessage} from "./../../DOM_component/dom_component"
import {StateControl} from "../stateControl";

class InputMessage{
    currentMsg
    idDomElement
    userId

    //---- dom value -----
    container

    // -- element vale --
    containerElement
    inputElement
    sendBtnElement
    idContainerElement // id user
    formElement


    constructor({currentMsg = "", userId = ""}){
        this.currentMsg = currentMsg;
        this.userId = userId;

    }

    // -- element manipulation --
    createElement(){return inputMessage(this.currentMsg);}
    resetElement(){this.containerElement = inputMessage(this.currentMsg)}
    deleteElement(){this.containerElement = null}
    setPseudoElement(){
        this.inputElement = this.containerElement.querySelector('input');
        this.formElement = this.containerElement.querySelector('form'); //form untuk submit
        this.idContainerElement = this.containerElement.querySelector('.user-id');
        this.sendBtnElement = this.containerElement.querySelector('button');
    }
    unsetPseudoElement(){
        this.inputElement = null
        this.formElement = null
        this.idContainerElement = null
        this.sendBtnElement = null
    }

    prepareElement(){
        this.resetElement();
        console.log(this.containerElement)
        this.setPseudoElement();
        
        this.fillCurrentElementDom();
    }

    // -- state control --
    fillCurrentElementDom(){
        this.idContainerElement.innerHTML = "#" + this.userId;
        this.inputElement.value = this.currentMsg
    }

    onSendMessage(callback){ //berisi callback untuk menjalankan fungsi yg dikirim nanti
        console.log('form',this.formElement);
        console.log('sendBtn',this.sendBtnElement);
        this.formElement.addEventListener('submit',(e)=>{
            e.preventDefault();
            callback({
                msg: this.inputElement.value,
                idSender : this.userId,
                fromMe : true,
            });
            this.inputElement.value = "";
        })
        this.sendBtnElement.addEventListener('click', (e)=> {
            e.preventDefault();
            callback({
                msg: this.inputElement.value,
                idSender : this.userId,
                fromMe : true,
            });
            this.inputElement.value = "";
        })
    }


}


export {InputMessage}
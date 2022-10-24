import {inputMessage} from "./../../DOM_component/dom_component"
import {StateControl} from "../stateControl";

class InputMessage{
    currentMsg
    idDomElement
    userId

    // -- config --
    sendMethod //['input','textArea']

    //---- dom value -----
    container

    // -- element vale --
    containerElement
    idContainerElement // id user

    // ** send on enter **
    inputElement
    sendBtnElement
    formElement
    sendOnEnterContainerElement

    // ** send on click **
    sendTextAreaBtnElement
    textAreaElement
    sendOnClickContainer


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
        this.idContainerElement = this.containerElement.querySelectorAll('.user-id');

        // ** send on enter **
        this.formElement = this.containerElement.querySelector('form'); //form untuk submit
        this.sendBtnElement = this.containerElement.querySelector('button.input-send');
        this.sendOnEnterContainerElement = this.containerElement.querySelector('.send-on-enter')

        // ** send on click **
        this.sendTextAreaBtnElement = this.containerElement.querySelector('button.tex-area-send');
        this.textAreaElement = this.containerElement.querySelector('textarea');
        this.sendOnClickContainer = this.containerElement.querySelector('.send-on-click')
    }
    unsetPseudoElement(){
        this.inputElement = null
        this.formElement = null
        this.idContainerElement = null
        this.sendBtnElement = null
        this.sendTextAreaBtnElement = null
        this.textAreaElement = null
        this.sendOnClickContainer = null
        this.sendOnEnterContainerElement = null

    }

    prepareElement(){
        this.resetElement();
        console.log(this.containerElement)
        this.setPseudoElement();
        
        this.fillCurrentElementDom();
        this.setSendMethod('input')
    }

    // -- state control --
    fillCurrentElementDom(){
        this.idContainerElement.innerHTML = "#" + this.userId;
        // this.inputElement.value = this.currentMsg; // mugkin dijadikan optional

    }

    setSendMethod(conf){
        //ada dua input method, yaitu textArea dan input
        switch(conf){
            case "input":
                this.sendMethod = "input";
                this.sendOnEnterContainerElement.classList.remove('hidden');
                this.sendOnClickContainer.classList.add('hidden')
                break;
            case "textArea":
                this.sendMethod = "textArea";
                break;
            default:
                throw new Error('config tidak valid')
        }
    }

    // -- event --
    onSendMessage(callback){ //berisi callback untuk menjalankan fungsi yg dikirim nanti
        if(this.sendMethod === "input"){
            this.onEnterSend(callback)
            return
        }else if(this.sendMethod === "textArea"){
            this.onClickSend(callback)
            return
        }
        throw new Error("callback tidak valit")
    }

    //kirim ketika dienter, untuk input
    onEnterSend(callback){
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

    //kirim ketika di klik kirim
    onClickSend(callback){
        this.sendTextAreaBtnElement.addEventListener('click', (e)=>{
            e.preventDefault();
            callback({
                msg: this.textAreaElement.value,
                idSender : this.userId,
                fromMe : true,
            });
        })
    }


}


export {InputMessage}
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
    idContainerElement = [] // id user

    // -- btn elemen --
    sendOnEnterBtnConfig
    sendOnClickBtnConfig

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

        // ** config btn **
        this.sendOnClickBtnConfig = this.containerElement.querySelector('#send-on-click-btn')
        this.sendOnEnterBtnConfig = this.containerElement.querySelector('#send-on-enter-btn')

        // ** send on enter **
        this.formElement = this.containerElement.querySelector('form'); //form untuk submit
        this.sendBtnElement = this.containerElement.querySelector('button.input-send');
        this.sendOnEnterContainerElement = this.containerElement.querySelector('.send-on-enter')

        // ** send on click **
        this.sendTextAreaBtnElement = this.containerElement.querySelector('button.text-area-send');
        this.textAreaElement = this.containerElement.querySelector('textarea');
        this.sendOnClickContainerElement = this.containerElement.querySelector('.send-on-click')
    }
    unsetPseudoElement(){
        this.inputElement = null
        this.formElement = null
        this.idContainerElement = null
        this.sendBtnElement = null
        this.sendTextAreaBtnElement = null
        this.textAreaElement = null
        this.sendOnClickContainerElement = null
        this.sendOnEnterContainerElement = null
        this.sendOnClickBtnConfig = null
        this.sendOnEnterBtnConfig = null
    }

    prepareElement(){
        this.resetElement();
        console.log(this.containerElement)
        this.setPseudoElement();
        
        this.fillCurrentElementDom();
        this.setSendMethod('input')
        this.setConfigBtnSend()
    }

    // -- state control --
    fillCurrentElementDom(){
        // this.idContainerElement.innerHTML = "#" + this.userId;
        this.idContainerElement.forEach((idc) => {
            idc.innerHTML = "#" + this.userId
        })
        // this.inputElement.value = this.currentMsg; // mugkin dijadikan optional

    }

    setSendMethod(conf){
        console.log("sennd mehtod sudah di set");
        //ada dua input method, yaitu textArea dan input
        switch(conf){
            case "input":
                this.sendMethod = "input";
                this.sendOnEnterContainerElement.classList.remove('hidden');
                this.sendOnClickContainerElement.classList.add('hidden')
                this.sendOnClickBtnConfig.classList.remove('underline');
                this.sendOnEnterBtnConfig.classList.add('underline');
                break;
            case "textArea":
                this.sendMethod = "textArea";
                this.sendOnEnterContainerElement.classList.add('hidden');
                this.sendOnClickContainerElement.classList.remove('hidden')                         
                this.sendOnClickBtnConfig.classList.add('underline');
                this.sendOnEnterBtnConfig.classList.remove('underline');
                break;
            default:
                throw new Error('config tidak valid')
        }

        console.log("send mthod : "+ this.sendMethod)
    }

    // -- event --
    onSendMessage(callback){ //berisi callback untuk menjalankan fungsi yg dikirim nanti

        console.log("ini akan melakuakan send yg mana? { "+ this.sendMethod )
        if(this.sendMethod === "input" || this.sendMethod === "textArea"){
            this.onEnterSend(callback)
            this.onClickSend(callback)
        }else{
            throw new Error("callback tidak valit")
        }
    }

    setConfigBtnSend(){
        this.sendOnClickBtnConfig.addEventListener('click', (e)=>{
            this.setSendMethod('textArea')
        })
        this.sendOnEnterBtnConfig.addEventListener('click',(e)=>{
            this.setSendMethod('input')
        })
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
            this.textAreaElement.value = ""
        })
    }


}


export {InputMessage}
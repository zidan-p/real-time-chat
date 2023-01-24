import {inputMessage} from "../../../DOM_component/dom_component"
import {ComponentStruct} from "./../../../core/component_struct";


class InputMessage extends ComponentStruct{
    currentMsg
    idDomElement
    user

    // -- config --
    sendMethod //['input','textArea']

    //---- dom value -----
    container

    constructor({currentMsg = "", user }){
        super()
        this.currentMsg = currentMsg;
        this.user = user;



        // -- define constructor --

        this.defineCreateElement(() => {
            return inputMessage(currentMsg);
        })
        this.defineElementStruct({
            input : "input", //ini input untuk send on enter
            idContainer : {
                selector : ".user-id",
                mode: "all"
            },
            // ** config **
            sendOnClickBtnConfig : "#send-on-click-btn",
            sendOnEnterBtnConfig : "#send-on-enter-btn",

            // ** send on enter **
            form : "form", //form untuk send on enter
            sendBtn : "button.input-send",
            sendOnEnterContainer : ".send-on-enter",

            // ** send on click **
            sendTextAreaBtn : "button.text-area-send",
            textArea : "textarea",
            sendOnClickContainer : ".send-on-click"
        })
    }

    prepareElement(){
        this.resetElement();
        this.setPseudoElement();
        
        this.fillCurrentElementDom();
        this.setSendMethod('input')
        this.setConfigBtnSend()
    }

    // -- state control --
    fillCurrentElementDom(){
        // this.idContainerElement.innerHTML = "#" + this.user;
        this.elementStruct.idContainer.forEach((idc) => {
            idc.innerHTML = "#" + this.user.id
        })
        // this.input.value = this.currentMsg; // mugkin dijadikan optional

    }

    setSendMethod(conf){
        console.log("sennd mehtod sudah di set");
        //ada dua input method, yaitu textArea dan input
        switch(conf){
            case "input":
                this.sendMethod = "input";
                this.elementStruct.sendOnEnterContainer.classList.remove('hidden');
                this.elementStruct.sendOnClickContainer.classList.add('hidden')
                this.elementStruct.sendOnClickBtnConfig.classList.remove('underline'); // ----
                this.elementStruct.sendOnEnterBtnConfig.classList.add('underline');
                break;
            case "textArea":
                this.sendMethod = "textArea";
                this.elementStruct.sendOnEnterContainer.classList.add('hidden');
                this.elementStruct.sendOnClickContainer.classList.remove('hidden')                         
                this.elementStruct.sendOnClickBtnConfig.classList.add('underline');
                this.elementStruct.sendOnEnterBtnConfig.classList.remove('underline');
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
        this.elementStruct.sendOnClickBtnConfig.addEventListener('click', (e)=>{
            this.setSendMethod('textArea')
        })
        this.elementStruct.sendOnEnterBtnConfig.addEventListener('click',(e)=>{
            this.setSendMethod('input')
        })
    }

    // ---- event list ----
    //kirim ketika dienter, untuk input
    onEnterSend(callback){
        this.elementStruct.form.addEventListener('submit',(e)=>{
            e.preventDefault();
            callback({
                msg: this.elementStruct.input.value,
                sender : this.user,
                fromMe : true,
            });
            this.elementStruct.input.value = "";
        })
        this.elementStruct.sendBtn.addEventListener('click', (e)=> {
            e.preventDefault();
            callback({
                msg: this.elementStruct.input.value,
                sender : this.user,
                fromMe : true,
            });
            this.elementStruct.input.value = "";
        })
    }

    //kirim ketika di klik kirim
    onClickSend(callback){
        this.elementStruct.sendTextAreaBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            callback({
                msg: this.elementStruct.textArea.value,
                sender : this.user,
                fromMe : true,
            });
            this.elementStruct.textArea.value = ""
        })
    }


}


export {InputMessage}
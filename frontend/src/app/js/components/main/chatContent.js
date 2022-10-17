import {msgRow} from '../../DOM_component/dom_component'
import {InputMessage} from './inputMessage'

// container atau tempat untuk menampilkan pesan
//disini dibuat setiap room
class ChatContent{
    // --- data value ---
    lastRow = 0
    idUser

    // ---- elemen value ---
    containerElement

    // ---- dom value ---
    container

    // --- object value ---
    inputMessage

    constructor({msg}){
        this.container = document.querySelector('#msg-container')
        this.idUser = 12321;
        this.inputMessage = new InputMessage({
            currentMsg : "test",
            userId: this.idUser
        })
    }

    appendMsg({msg = "",idSender = NaN,fromMe = false}){
        this.container.append(
            msgRow({
                numberRow : this.lastRow,
                msg : msg,
                idSender : idSender,
                fromMe :fromMe
            })
        )
        console.log('seharusny sudah ter append')
        this.lastRow++;
    }

    setEvent(){
        this.inputMessage.setDom();
        this.inputMessage.fillDomElement()

        this.inputMessage.onSubmitForm(()=>{
            console.log("memanggil callback");
            this.appendMsg({
                msg : this.inputMessage.input.value,
                idSender : this.idUser,
                fromMe : true
            })
        })
    }
}

export {ChatContent};
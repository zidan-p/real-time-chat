import {msgRow} from '../../DOM_component/dom_component'
import {StateControl} from "../stateControl";

// container atau tempat untuk menampilkan pesan
//disini dibuat setiap room
class ChatContent{
    // --- data value ---
    lastRow = 0
    idUser
    msg = []

    // ---- elemen value ---
    containerElement


    constructor({msg, idUser}){
        this.idUser = 12321;
        this.msg = msg;
    }

    // -- element manipulation --
    resetElement(){this.containerElement = document.createElement('div')}
    deleteElement(){this.containerElement = null}

    prepareElement(){
        this.resetElement();
        this.fillCurrentElementDom();
    }

    fillCurrentElementDom(){
        this.msg.forEach(msg => {
            this.appendMsg({
                msg : msg.data,
                idSender : msg.idSender,
                fromMe : false
            })
        })
    }

    // -- state controll --
    appendMsg({msg = "",idSender = NaN, fromMe = false}){
        this.containerElement.append( msgRow({
            numberRow : this.lastRow,
            msg : msg,
            idSender : idSender,
            fromMe :fromMe
        }))

        console.log("text appended")
        this.lastRow++;
    }

}

export {ChatContent};
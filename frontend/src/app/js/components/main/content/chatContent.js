import {msgRow} from '../../../DOM_component/dom_component'

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
        this.idUser = idUser;
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
                msg : msg.message,
                idSender : msg.userId,
                fromMe : msg.userId == this.idUser
            })
        })
    }

    // -- state controll --
    appendMsg({msg = "",idSender = NaN, fromMe = false}){
        let tempmsg = msgRow({
            numberRow : this.lastRow,
            msg : msg,
            idSender : idSender,
            fromMe : fromMe
        })
        this.containerElement.append( 
            tempmsg
        )
        this.containerElement.scrollIntoView({block: "end"});
        setTimeout(()=>{tempmsg.classList.remove('bg-vscode-1')},100)
        this.lastRow++;
    }

}

export {ChatContent};
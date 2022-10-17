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


    constructor({msg}){
        this.container = document.querySelector('#msg-container')
        this.containerElement = this.container.cloneNode(true);
        this.idUser = 12321;
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
        console.log("text appended")
        this.lastRow++;
    }

    //menghapus instance node elemen
    //tapi hasil update tetap disimpan
    swapOutMsg(){
        this.containerElement = this.container.cloneNode(true);
        this.container.innerHTML = "";
    }

    //menampilkan hasil update container
    swapInMsg(){
        this.container.outerHTML = this.containerElement;
    }

}

export {ChatContent};
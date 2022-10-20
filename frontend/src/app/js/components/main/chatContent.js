import {msgRow} from '../../DOM_component/dom_component'
import {StateControl} from "../stateControl";

// container atau tempat untuk menampilkan pesan
//disini dibuat setiap room
class ChatContent extends StateControl{
    // --- data value ---
    lastRow = 0
    idUser

    // ---- elemen value ---
    containerElement

    // ---- dom value ---
    container


    constructor({msg}){
        this.idUser = 12321;
    }

    setDomContainer(){this.container = document.querySelector('#msg-container')}
    unsetDomContainer(){this.container = null}
    fillElementDomContainer(){this.container.append(this.containerElement);}
    deleteDom(){this.container.innerHTML = ``} //semua dom baik container maupun isi
    restoreDom(){this.container.innerHTML = this.containerElement.firstChild.innerHTML}
    

    // -- element manipulation --
    resetElement(){this.containerElement = document.createElement('div')}
    setCurrentElement(){this.containerElement = this.container.cloneNode(true)}
    deleteElement(){this.containerElement = null}


    // -- state controll --
    appendMsg({msg = "",idSender = NaN, fromMe = false}){
        this.container.append( msgRow({
            numberRow : this.lastRow,
            msg : msg,
            idSender : idSender,
            fromMe :fromMe
        }))
        //supaya realtime
        this.containerElement = this.container;

        console.log("text appended")
        this.lastRow++;
    }

}

export {ChatContent};
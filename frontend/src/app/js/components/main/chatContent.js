import {msgRow} from '../../DOM_component/dom_component'

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
        this.idUser = 12321;
    }

    setDomContainer(){this.container = document.querySelector('#msg-container')}
    unsetDomContainer(){this.container = null}
    fillElementDomContainer(){this.container.append(this.containerElement);}
    deleteDom(){this.container.innerHTML = ``} //semua dom baik container maupun isi
    restoreDom(){this.container.append(this.containerElement.firstChild)}
    

    // -- element manipulation --
    resetElement(){this.containerElement = document.createElement('div')}
    setCurrentElement(){this.containerElement = this.container.cloneNode(true)}
    deleteElement(){this.containerElement = null}


    // -- state controll --
    appendMsg({msg = "",idSender = NaN, fromMe = false}){
        this.container.append({
            numberRow : this.lastRow,
            msg : msg,
            idSender : idSender,
            fromMe :fromMe
        })
        console.log("text appended")
        this.lastRow++;
    }
    store(){
        this.setDomContainer();
        this.resetElement();
        this.fillElementDomContainer();
    }
    hide(){
        this.setCurrentElement();//simpan state
        this.deleteDom();
    }
    show(){
        this.setDom();
        this.restoreDom();
    }

}

export {ChatContent};
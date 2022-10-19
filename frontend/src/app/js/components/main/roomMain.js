import {Header} from "./header";
import {InputMessage} from "./inputMessage";
import {ChatContent} from "./chatContent";
import {mainBodyRoom} from "./../../DOM_component/dom_component"

class RoomMain{
    // -- object --
    header
    inputMessage
    chatContent

    // -- data --
    idUser // user ini

    // -- dom value --
    container
    headerContainer
    inputContainer
    chatContentContainer

    // -- element value --
    containerElement

    constructor({roomName, roomIcon, msg}){

        this.idUser = 12312; //ini cuma dummy

        this.header = new Header({
            roomName: roomName,
            roomIcon: roomIcon
        });

        this.inputMessage = new InputMessage({
            currentMsg : "dummy", //kosong kan terlebih dahulu
            userId : 123, //nah, ini mungkin bisa di lihat nanti
        })

        this.chatContent = new ChatContent({
            msg : msg
        })
    }


    //untuk handle event submit
    setEvent(){
        this.inputMessage.onSubmitForm(({message})=>{
            this.chatContent.appendMsg({
                msg : message,
                idSender : this.idUser,
                fromMe : true
            })
        })
    }

    // -- dom manipulation --
    setDomContainer(){this.container = document.querySelector('MAIN')}
    unsetDomContainer(){this.container = null}
    fillElementDomContainer(){this.container.append(this.containerElement);}
    setDom(){
        this.chatContentContainer = this.container.querySelector('#msg-container');
        this.headerContainer = this.container.querySelector('#header');
        this.inputContainer = this.container.querySelector('#input-msg-container');
    }
    usetDom(){
        this.chatContentContainer = null;
        this.headerContainer = null;
        this.inputContainer = null;
    }
    deleteDom(){this.container.innerHTML = ``} //semua dom baik container maupun isi

    // -- element manipulation --
    createElement(){return mainBodyRoom();}
    resetElement(){this.containerElement = mainBodyRoom()}
    setCurrentElement(){this.containerElement = this.container.cloneNode(true)}
    deleteElement(){this.containerElement = null}



}

export {RoomMain}

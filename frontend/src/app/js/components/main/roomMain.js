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
    unsetDom(){
        this.chatContentContainer = null;
        this.headerContainer = null;
        this.inputContainer = null;
    }
    deleteDom(){this.container.innerHTML = ``} //semua dom baik container maupun isi
    restoreDom(){this.container.append(this.containerElement.firstChild)}

    // -- element manipulation --
    createElement(){return mainBodyRoom();}
    resetElement(){this.containerElement = mainBodyRoom()}
    setCurrentElement(){this.containerElement = this.container.cloneNode(true)}
    deleteElement(){this.containerElement = null}


    // -- state manipulation --
    store(){
        this.setDomContainer();
        this.resetElement();
        this.fillElementDomContainer();
        this.setDom();

        this.header.store();
        this.chatContent.store();
        this.inputMessage.store();
    }
    remove(){
        this.header.remove();
        this.chatContent.remove();
        this.inputMessage.remove();
        this.unsetDom();
        this.unsetDomContainer()
        this.deleteElement();
        // this.deleteDom(); // ini optional, terantung penggunaan
        //dilanjutkan pada bagian admin, apakah elemen didalam juga ikut dihapus..
    }
    hide(){
        this.setCurrentElement();
        this.unsetDom();
        this.header.hide();
        this.chatContent.hide();
        this.inputMessage.hide();
    }
    show(){
        this.setDom();
        this.restoreDom();
        this.header.show();
        this.chatContent.show();
        this.inputMessage.show();
    }


}

export {RoomMain}

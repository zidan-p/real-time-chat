import {Header} from "./content/header";
import {InputMessage} from "./content/inputMessage";
import {ChatContent} from "./content/chatContent";
import {mainBodyRoom} from "./../../DOM_component/dom_component"
import {addResizer} from "./../../service/resizer";
import { RoomMenu } from "./content/roomMenu";

class RoomMain{
    // -- object --
    header
    inputMessage
    chatContent
    roomMenu

    // -- data --
    idUser // user ini
    isActive // apakah room ini active?

    // -- dom value --
    container

    // -- element value --
    containerElement
    headerContainerElement
    inputContainerElement
    chatContentContainerElement
    resizerElement

    constructor({roomName, msg}){

        this.idUser = 12312; //ini cuma dummy
        this.isActive = false;

        this.header = new Header({
            roomName: roomName,
        });

        this.inputMessage = new InputMessage({
            currentMsg : "dummy", //kosong kan terlebih dahulu
            userId : 123, //nah, ini mungkin bisa di lihat nanti
        })

        this.chatContent = new ChatContent({msg : msg})

        this.roomMenu = new RoomMenu({
            
        })
    }

    // -- element manipulation --
    createElement(){return mainBodyRoom()}
    resetElement(){this.containerElement = this.createElement()}
    deleteElement(){this.containerElement = null}
    setPseudoElement(){
        this.chatContentContainerElement = this.containerElement.querySelector('#msg-container');
        this.headerContainerElement = this.containerElement.querySelector('#header');
        this.inputContainerElement = this.containerElement.querySelector('#input-msg-container');
        this.resizerElement = this.containerElement.querySelector('.resizer');
    }
    unsetPseudoElement(){
        this.chatContentContainerElement = null
        this.headerContainerElement = null
        this.inputContainerElement = null
        this.resizerElement = null
    }


    // -- attach dan detach --
    // ** attach
    attachHeader(header){this.headerContainerElement.append(this.header.containerElement)}
    attachInputMessage(input){this.inputContainerElement.append(this.inputMessage.containerElement)}
    attachChatContent(content){this.chatContentContainerElement.append(this.chatContent.containerElement)}

    // ** detach
    detachHeader(){this.headerContainerElement.innerHTML = ""}
    detachInputMessage(){this.inputContainerElement.innerHTML = ""}
    detachChatContent(){this.chatContentContainerElement.innerHTML = ""}

    prepareElement(){
        this.resetElement();
        this.setPseudoElement();
        console.log(this.containerElement)

        this.header.prepareElement();
        this.inputMessage.prepareElement();
        this.chatContent.prepareElement();

        this.attachHeader();
        this.attachChatContent();
        this.attachInputMessage();
        
        this.setSendMessage();
        this.addResizer();
    }

    // -- status --
    setInactive(){this.isActive = false;}
    setActive(){this.isActive = true;}

    // -- event --
    setSendMessage(){
        this.inputMessage.onSendMessage(
            (data)=>{
                this.chatContent.appendMsg({
                    fromMe: data.fromMe,
                    idSender: data.idSender,
                    msg: data.msg
                })
            }
        )
    }

    // -- service--
    addResizer(){
        addResizer(
            this.resizerElement,
            this.resizerElement.dataset.direction
        )
    }


}

export {RoomMain}

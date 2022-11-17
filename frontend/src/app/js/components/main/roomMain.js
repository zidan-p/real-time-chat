import {Header} from "./content/header";
import {InputMessage} from "./content/inputMessage";
import {ChatContent} from "./content/chatContent";
import {mainBodyRoom} from "./../../DOM_component/dom_component"
import {addResizer} from "./../../service/resizer";
import { RoomMenu } from "./content/roomMenu";
import {ComponentStruct} from "./../../core/component_struct";
import tippy from 'tippy.js';

class RoomMain extends ComponentStruct{
    // -- object --
    header
    inputMessage
    chatContent
    roomMenu

    // -- data --
    idUser // user ini
    isActive // apakah room ini active?
    room

    constructor(room){
        super()
        this.room = room;

        this.idUser = 12312; //ini cuma dummy
        this.isActive = false;

        this.header = new Header({
            roomName: room.name,
        });

        this.inputMessage = new InputMessage({
            currentMsg : "dummy", //kosong kan terlebih dahulu
            userId : 12312, //nah, ini mungkin bisa di lihat nanti
        })

        this.chatContent = new ChatContent({msg : room.msg})

        this.roomMenu = new RoomMenu({
            memberList : room.participant,
            roomDescription : room.description,
            roomName : room.name,
            messageCount : room.msg.length, // supaya performanya tidak buruk2 amat
            createdAt : room.createdAt,
            creator : room.creator,

        })

        this.defineCreateElement(mainBodyRoom);
        this.defineElementStruct({
            chatContent: "#msg-container",
            header: "#header",
            input: "#input-msg-container",
            resizer: ".resizer"
        })
    }

    prepareElement(){
        this.resetElement();
        this.setPseudoElement();
        this.defineAttachcement();

        this.header.prepareElement();
        this.inputMessage.prepareElement();
        this.chatContent.prepareElement();
        this.roomMenu.prepareElement();

        this.attachProp.header(this.header);
        this.attachProp.chatContent(this.chatContent);
        this.attachProp.input(this.inputMessage);
        
        this.setSendMessage();
        this.setShowInfo()
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

    setShowInfo(){
        console.log("seharusnya set info sudah di set");
        this.header.onInfoClick(
            (element) => {
                console.log(element);
                tippy(element,{
                    content : this.roomMenu.containerElement,
                    trigger: 'click',
                    // placement : "bottom-start",
                    placement: 'auto',
                    interactive: true,
                    maxWidth: 700,
                    offset: [0,20]
                })
            }
        )
    }

    // -- service--
    addResizer(){
        console.log("test untuk mendapatkan data set",this.elementStruct.resizer);
        addResizer(
            this.elementStruct.resizer,
            this.elementStruct.resizer.dataset.direction
        )
    }


}

export {RoomMain}

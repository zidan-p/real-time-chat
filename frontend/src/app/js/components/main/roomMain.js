import {Header} from "./header";
import {InputMessage} from "./inputMessage";
import {ChatContent} from "./chatContent";


class RoomMain{
    // -- object --
    header
    inputMessage
    chatContent

    // -- value --

    constructor({roomName, roomIcon}){

        this.header = new Header({
            roomName: roomName,
            roomIcon: roomIcon
        });

        this.inputMessage = new InputMessage({
            currentMsg : "dummy", //kosong kan terlebih dahulu
            userId : 123, //nah, ini mungkin bisa di lihat nanti
        })

        this.chatContent = new ChatContent({
            
        })
    }



}

export {RoomMain}

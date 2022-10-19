//karen saya masih bingung maka saya buat room tersendiri yang nantinya 
//room ini akan digunkana untuk main dan sidebar

import { RoomAside } from "./sidebar/roomAside";
import { RoomMain} from "./main/roomMain";

class Room {
    // --- object ---
    roomAside
    roomMain

    // -- data properties --
    participant = []
    msg = [] //saya kurang tahu apakah ini disarankan?
    name
    id
    isActive

    // -- dom object --
    sideRoomContainer
    mainRoomContainer

    constructor({participant, msg, name, id}){
        this.msg = msg;
        this.name = name;
        this.id = id;
        this.participant = participant;

        this.roomAside = new RoomAside({
            roomName : this.name,
            newMsg: "",
            roomId : this.id
        });

        this.roomMain = new RoomMain({
            roomName : this.name,
            roomIcon : "dummy icon",
            msg: msg
        })
    }

    //-- set inactive --
    setInactive(){
        this.roomAside.setInactive();
        this.roomMain.hide();
    }
    setActive(){
        this.roomAside.setActive();
        this.roomMain.show();
    }


}

export {Room}
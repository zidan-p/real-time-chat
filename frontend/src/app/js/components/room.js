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

    constructor({participant, msg, name, id,isActive = false}){
        this.msg = msg;
        this.name = name;
        this.id = id;
        this.participant = participant;
        this.isActive = isActive

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

    prepareElement(){
        this.roomMain.prepareElement();
        this.roomAside.prepareElement();
    }

    //-- set active inactive --
    setInactive(){ 
        this.isActive = false;
        this.roomAside.setInactive();
        this.roomMain.setInactive();
    }
    setActive(){
        console.log("ini di set aktiv");
        this.isActive = true;
        this.roomAside.setActive();
        this.roomMain.setActive();
    }


}

export {Room}
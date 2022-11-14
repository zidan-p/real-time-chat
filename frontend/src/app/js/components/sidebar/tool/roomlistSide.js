import {roomListSideContent} from "./../../../DOM_component/dom_component"
import {ComponentStruct} from "../../../core/component_struct"

class RoomListSide extends ComponentStruct{
    roomSideList = [] //berisi object roomAside

    // -- element dom --
    containerElement

    // -- data value --
    active = false

    constructor(roomList){
        super()
        this.roomSideList = roomList

        this.defineCreateElement(roomListSideContent);
        this.defineElementStruct({});
    }
    prepareElement(){
        this.resetElement();
        this.fillRoom()
    }

    // -- state control --
    setActive(){this.active = true}
    setInactive(){this.active = false}

    // -- room manopulation --
    addRoom(roomSide){
        this.roomSideList.push(roomSide)
        this.appendRoom(roomSide)
    }
    appendRoom(roomSide){
        this.containerElement.append(roomSide.containerElement)
    }
    fillRoom(){
        this.roomSideList.forEach(room => {this.appendRoom(room)})
    }
    deleteRoom(room){
        room.deleteThisDomAndElement();
        this.roomSideList.forEach((arr,i)=>{
            if(arr.roomId == room.roomId){
                this.roomSideList.splice(i,1); //hapus elemenya :: note!! ini akan error bila ada id yng sama ::
            }
        })
    }
}

export {RoomListSide}
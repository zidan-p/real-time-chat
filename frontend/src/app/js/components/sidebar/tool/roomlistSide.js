import {roomListSideContent} from "./../../../DOM_component/dom_component"

class RoomListSide{
    roomSideList = [] //berisi object roomAside

    // -- element dom --
    containerElement

    // -- data value --
    active = false

    constructor(roomList){
        this.roomSideList = roomList
    }
    createElement(){return roomListSideContent();}
    resetElement(){this.containerElement = this.createElement()}
    deleteElement(){this.containerElement = null}
    setPseudoElement(){}//gk ada elemen
    unsetPseudoElement(){}//gk ada elemen
    prepareElement(){
        this.resetElement();
        this.fillRoom()
    }

    // -- state control --
    setActive(){
        this.active = true
         
        console.log('---------- set active untuk room list')
    }
    setInactive(){
        this.active = false
         
    }

    // -- room manopulation --
    addRoom(roomSide){
        this.roomSideList.push(roomSide)
        this.appendRoom(roomSide)
    }
    appendRoom(roomSide){
        console.log(roomSide)
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
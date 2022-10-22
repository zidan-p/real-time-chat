import { sideBody } from "../../DOM_component/dom_component"



class SideBar{
    roomSideList = [] //berisi object roomAside

    // -- element value ---
    containerElement
    roomListContainerElement
    settingContainerElement

    constructor(roomSideList){
        this.roomSideList = roomSideList;
        console.log(this.roomSideList)
    }

    // -- dom manipulation --

    // -- element manipulation --
    createElement(){return sideBody();}
    resetElement(){this.containerElement = this.createElement()}
    deleteElement(){this.containerElement = null}
    setPseudoElement(){
        this.roomListContainerElement = this.containerElement.querySelector('#room-list');
        this.settingContainerElement = this.containerElement.querySelector('#setting-list');
    }
    setPseudoElement(){
        this.roomListContainerElement = this.containerElement.querySelector('#room-list');
        this.settingContainerElement = this.containerElement.querySelector('#setting-list');
    }
    prepareElement(){
        this.resetElement();
        this.setPseudoElement();

        this.fillRoom();
    }



    // -- room manopulation --
    addRoom(roomSide){
        this.roomSideList.push(roomSide)
        this.appendRoom(roomSide)
    }
    appendRoom(roomSide){
        console.log(roomSide)
        this.roomListContainerElement.append(roomSide.containerElement)
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


export {SideBar}
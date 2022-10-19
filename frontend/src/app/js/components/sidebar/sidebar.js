import { sideBody } from "../../DOM_component/dom_component"



class SideBar{
    roomSideList = [] //berisi object roomAside

    // -- dom element ---
    container
    roomListContainer
    settingContainer

    // -- element value ---
    containerElement

    constructor(roomSideList){
        this.roomSideList = roomSideList;
    }

    // -- dom manipulation --
    setDomContainer(){this.container = document.querySelector('ASIDE')}
    unsetDomContainer(){this.container = null}
    fillElementDomContainer(){this.container.append(this.containerElement);}
    setDom(){
        this.roomListContainer = this.container.querySelector('#room-list')
        this.settingContainer = this.container.querySelector('#setting-list');
    }
    unsetDom(){
        this.roomListContainer = null
        this.settingContainer = null
    }
    deleteDom(){this.container.innerHTML = ``} //semua dom baik container maupun isi

    // -- element manipulation --
    createElement(){return sideBody();}
    resetElement(){this.containerElement = this.createElement()}
    setCurrentElement(){this.containerElement = this.container.cloneNode(true)}
    deleteElement(){this.containerElement = null}

    showThis(){
        this.setDomContainer();
        this.resetElement();
        this.fillElementDomContainer();
        this.setDom();
        this.fillRoom();
    }

    // -- room manopulation --
    addRoom(roomSide){
        this.roomSideList.push(roomSide)
        this.appendRoom(roomSide)
    }
    appendRoom(roomSide){
        console.log(roomSide)
        this.roomListContainer.append(roomSide.createElement())
        roomSide.setDomContainer();
        roomSide.setDom()
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
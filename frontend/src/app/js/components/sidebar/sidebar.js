


class SideBar{
    roomSideList = [] //berisi object roomAside

    // -- dom element ---
    container
    roomListContainer
    settingContainer

    constructor(roomSideList){
        this.roomSideList = roomSideList;
        this.setDOM()
        this.fillRoom()
    }

    setDOM(){
        this.container = document.querySelector('ASIDE')
        this.roomListContainer = this.container.querySelector('#room-list')
        this.settingContainer = this.container.querySelector('#setting-list');
    }

    addRoom(roomSide){
        this.roomSideList.push(roomSide)
        this.appendRoom(roomSide)
    }

    appendRoom(roomSide){
        this.roomListContainer.append(
            roomSide.createElement()
        )
        roomSide.setDom()
    }

    fillRoom(){
        this.roomSideList.forEach(room => {
            this.appendRoom(room);
        })
    }
}


export {SideBar}
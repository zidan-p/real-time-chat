import {roomMenu} from "./../../../DOM_component/dom_component";
import {memberMenuList} from "./../../../DOM_component/dom_component";


class RoomMenu{
    // -- object value --
    memberList = []
    roomDescription
    roomName
    messageCount // supaya performanya tidak buruk2 amat
    createdAt
    creatorId


    // -- element value --
    containerElement
    memberListElement
    roomNameElement
    messageCountElement
    createdAtElement
    creatorIdElement

    constructor({
        memberList,
        roomDescription,
        roomName,
        messageCount, // supaya performanya tidak buruk2 amat
        createdAt,
        creatorId,
    }){
        this.memberList = memberList
        this.roomDescription = roomDescription
        this.roomName = roomName
        this.messageCount = messageCount
        this.createdAt = createdAt
        this.creatorId = creatorId
    }

    createElement(){
        return roomMenu({
            roomName, 
            msgCount, 
            membersCount, 
            createdAt, 
            creatorId, 
            roomDescription
        })
    }
    resetElement(){this.containerElement = this.createElement()}
    deleteElement(){this.containerElement = null}
    setPseudoElement(){
        this.nameContainerElement = this.containerElement.querySelector('#header-room-name');
    }
    unsetPseudoElement(){
        this.nameContainerElement = null
    }

    prepareElement(){
        this.resetElement();
        this.setPseudoElement();
        this.fillCurrentElementDom();
    }
}


export {RoomMenu}
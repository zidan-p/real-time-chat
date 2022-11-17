import {roomMenu} from "./../../../DOM_component/dom_component";
import {memberMenuList} from "./../../../DOM_component/dom_component";
import {ComponentStruct} from "./../../../core/component_struct";

class RoomMenu extends ComponentStruct{
    // -- object value --
    roomGlance

    // -- element value --
    containerElement
    memberListElement
    roomNameElement
    messageCountElement
    createdAtElement
    creatorIdElement

    /**
     * 
     * ```
     * let obj = {
     *  this.memberList = memberList
        this.roomDescription = roomDescription
        this.roomName = roomName
        this.messageCount = messageCount
        this.createdAt = createdAt
        this.creatorId = creatorId
     * }
     * ```
     * 
     * @param {Object} roomGlance 
     */

    constructor(roomGlance){
        super()
        this.roomGlance = roomGlance

        // -- define constructor --
        this.defineElementStruct({
            roomName : ".room-name",
            messagCount : "#message-count",
            memberCount : "#member-count",
            createAt : ".created-at",
            creatorId : ".creator-id",
            roomDescription : ".room-description",
            OutBtn : "button.out",
            memberListContainer : ".member-list"
        })

        this.defineCreateElement(()=>{
            return roomMenu({
                roomName : this.roomGlance.roomName, 
                messageCount : this.roomGlance.messageCount, 
                memberCount : this.roomGlance.memberList.length, 
                createdAt : this.roomGlance.createdAt, 
                creatorId : this.roomGlance.creator.id, 
                roomDescription : this.roomGlance.roomDescription
            })
        })
    }

    prepareElement(){
        this.resetElement();
        this.setPseudoElement();
        
        this.fillMember();
    }

    // -- room manopulation --
    addMember(member){
        this.roomGlance.memberlist.push(roomSide)
        this.appendMember(roomSide)
    }
    appendMember(member){ // atau user
        this.elementStruct.memberListContainer.append(
            memberMenuList({
                userId : member.id,
                userName : member.name
            })
        )
    }
    fillMember(){
        this.roomGlance.memberList.forEach(room => {this.appendMember(room)})
    }
    deleteMember(room){
        this.roomGlance.memberList.forEach((arr,i)=>{
            if(arr.roomId == room.roomId){
                this.roomGlance.memberList.splice(i,1); //hapus elemenya :: note!! ini akan error bila ada id yng sama ::
            }
        })

        this.fillMember();
    }
}


export {RoomMenu}
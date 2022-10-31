import { sideBody } from "../../DOM_component/dom_component"
import {AccountSide} from "./tool/accountSide";
import {CreateRoomSide} from "./tool/createRoomSide";
import {JoinRoomSide} from "./tool/joinRoomSide";
import {RoomListSide} from "./tool/roomListSide";
import {SettingSide} from "./tool/settingSide"



class SideBar{
    

    // -- element value ---
    containerElement
    sideContentContainerElement
    // ** button value **
    roomListSidebtn
    joinRoomBtn
    settingBtn
    createRoomBtn // -- create room
    accountBtn

    // -- data value --
    active

    // -- object value --
    account
    createRoom // -- create room
    joinRoom
    roomListSide
    setting

    constructor(roomSideList){
        this.roomListSide = new RoomListSide(roomSideList);
        this.account = new AccountSide();
        this.createRoom = new CreateRoomSide();
        this.joinRoom = new JoinRoomSide();
        this.setting = new SettingSide();

        //set active defaultnya adalah room list
        this.active = this.roomListSide
    }

    // -- element manipulation --
    createElement(){return sideBody();}
    resetElement(){this.containerElement = this.createElement()}
    deleteElement(){this.containerElement = null}
    setPseudoElement(){
        this.sideContentContainerElement = this.containerElement.querySelector('#side-content')
        this.roomListSidebtn = this.containerElement.querySelector('#room-list-btn')
        this.joinRoomBtn = this.containerElement.querySelector('#join-room-btn')
        this.createRoomBtn = this.containerElement.querySelector('#add-room-btn')
        this.settingBtn = this.containerElement.querySelector('#setting-btn')
        this.accountBtn = this.containerElement.querySelector('#account-btn')
    }
    unsetPseudoElement(){
        this.sideContentContainerElement = this.containerElement.querySelector('#side-content')
        this.roomListSidebtn = null 
        this.joinRoomBtn = null
        this.createRoomBtn = null
        this.settingBtn = null
        this.accountBtn = null
    }


    // -- state --
    setActiveContent(content){
        console.log('---- content di set active')
        this.active = content;
        content.setActive();
    };
    setInactiveContent(content){
        content.setInactive()
    };
    attachContent(content){
        console.log("konten yg akan di append",content)
        this.sideContentContainerElement.append(content)
    }
    detachContent(){
        this.sideContentContainerElement.innerHTML = "";
    }
    changeMainContent(content){
        this.setInactiveContent(this.active);
        this.detachContent();
        this.setActiveContent(content);
        this.attachContent(content.containerElement)
    }
    showCurrentContent(){
        console.log("content akan di attach")
        this.attachContent(this.active.containerElement);
    }
    prepareElement(){
        this.resetElement();
        this.setPseudoElement();

        this.roomListSide.prepareElement();
        this.account.prepareElement();
        this.createRoom.prepareElement();
        this.joinRoom.prepareElement();
        this.setting.prepareElement();

        this.setBtnEvent()
        // this.testing()
        this.showCurrentContent()
    }

    // -- event --
    setBtnEvent(){
        this.roomListSidebtn.addEventListener('click',(e)=>{this.changeMainContent(this.roomListSide)}) 
        this.joinRoomBtn.addEventListener('click',(e)=>{this.changeMainContent(this.joinRoom)}) 
        this.createRoomBtn.addEventListener('click',(e)=>{this.changeMainContent(this.createRoom)})
        this.settingBtn.addEventListener('click',(e)=>{this.changeMainContent(this.setting)})
        this.accountBtn.addEventListener('click',(e)=>{this.changeMainContent(this.account)})
    }

    testing(){
        console.log(this.sideContentContainerElement)
        console.log(this.roomListSidebtn)
        console.log(this.joinRoomBtn)
        console.log(this.createRoomBtn)
        console.log(this.settingBtn)
    }




}


export {SideBar}
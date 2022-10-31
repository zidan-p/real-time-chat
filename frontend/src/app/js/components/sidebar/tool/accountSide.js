import {accountSideContent} from "./../../../DOM_component/dom_component"



class AccountSide{

    // -- dom - element --
    containerElement
    nameContainer
    idContainer
    saveBtn
    formElement

    // -- data value --
    userData
    active = false

    constructor(){
        this.getUserData()
    }

    // -- element manipulation --
    createElement(){return accountSideContent();}
    resetElement(){this.containerElement = this.createElement()}
    deleteElement(){this.containerElement = null}
    setPseudoElement(){
        this.nameContainer = this.containerElement.querySelector('#name-account-side')
        this.idContainer = this.containerElement.querySelector('#id-account-side')
        this.saveBtn = this.containerElement.querySelector('button');
        this.formElement = this.containerElement.querySelector('form');
    }
    unsetPseudoElement(){
        this.nameContainer = null
        this.idContainer = null
        this.saveBtn = null
        this.formElement = null
    }
    
    // -- state --
    prepareElement(){
        this.resetElement();
        this.setPseudoElement();
        this.fillCurrentElementDom();
        this.setEvent();
    }
    fillCurrentElementDom(){
        this.nameContainer.value = this.userData.name
        this.idContainer.value = this.userData.id
    }
    setActive(){
        this.active = true
         
    }
    setInactive(){
        this.active = false;
        this.fillCurrentElementDom();
         
        //dibuat supaya ketika diubah2 datanya masih sama
        //nanti kana di imporve supaya bisa handle emit
    }

    // -- state control --
    setActive(){this.active = true}
    setInactive(){this.active = false}

    

    // -- event --
    setEvent(){
        this.formElement.addEventListener('submit',(e)=>{
            e.preventDefault();
            this.changeUserData();

            //todo: create event untuk emit event websokcet global
        })
    }

    
    // -- functional behavior --
    getUserData(){
        this.userData = JSON.parse(
            localStorage.getItem('userData')
        )
    }
    

    changeUserData(){
        let user = {
            id: this.idContainer.value,
            name: this.nameContainer.value,
            lastActive : this.userData.latActive
        }

        localStorage.setItem("userData",JSON.stringify(
            user
        ))
    }

}


export {AccountSide}
import {signinView} from "./../../DOM_component/dom_component";


class Signin{

    //-- elemen --
    containerElement
    idUser
    nameUser
    descUser
    form

    constructor(){
        console.log(signinView);
    }

    // -- element manipulation --
    createElement(){return signinView();}
    resetElement(){this.containerElement = this.createElement()}
    deleteElement(){this.containerElement = null}
    setPseudoElement(){
        this.idUser = this.containerElement.querySelector('#id-user-signin')
        this.nameUser = this.containerElement.querySelector('#name-user')
        this.descUser = this.containerElement.querySelector('#desc-user')
        this.form = this.containerElement.querySelector('form')
    }
    unsetPseudoElement(){
        this.idUser = null
        this.nameUser = null
        this.descUser = null
        this.form = null
    }

    prepareElement(){
        this.resetElement();
        this.setPseudoElement();
        this.setEvent();
    }

    setEvent(){
        //sebelum adanay set event, ada baiknya untuk mendapat id dari server
        //sebelum eventlistener dibuat request untuk mendapat id di admin

        this.form.addEventListener('submit',(e)=>{
            //mungkin bisa dilakukan handle server
            e.preventDefault()
        })
    }
}

export {Signin}
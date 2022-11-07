// dimana proram pertama kali dijalankan
// bila data belum ada maka dusuruh untuk signup terlebig dahulu
import {loaderView} from "./../DOM_component/dom_component";
import {Signin} from "./../components/signin/signin"

class Initial{
    // -- data value 
    isSet
    signin

    // -- elemen --
    loaderview
    initial

    
    constructor(){
        this.signin = new Signin();
    }

    checkIsset(){
        let check = localStorage.getItem('userData');
        if(check){
            this.isSet = true;
            return true;
        }
        this.isSet = false;
        return true
    }

    showSignin(){
        document.querySelector('body').innerHTML = "";
        this.signin.prepareElement();
        document.querySelector('body').append(this.signin.containerElement);
    }

    showLoader(){

    }

}

export {Initial}
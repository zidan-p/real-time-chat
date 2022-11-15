// dimana proram pertama kali dijalankan
// bila data belum ada maka dusuruh untuk signup terlebig dahulu
import {loaderView} from "./../DOM_component/dom_component";
import {SigninLogin} from "../components/signin_login/signin_login"
 
class Initial{
    // -- data value 
    isSet
    signin

    // -- elemen --
    loaderview
    initial

    
    constructor(){
        this.signin = new SigninLogin();
    }

    checkIsset(){
        let check = localStorage.getItem('userData');
        if(check) this.isSet = true;
        else this.isSet = false;

        return this.isSet
    }

    showSignin(){
        document.querySelector('body').innerHTML = "";
        this.signin.prepareElement();
        document.querySelector('body').append(this.signin.containerElement);
    }

    showLoader(){
        document.querySelector('body').innerHTML = "";
        document.querySelector('body').append(loaderView());
    }

}

export {Initial}
import css from "./app/css/index.css"
import {updateTooltipDom} from "./app/js/service/popover";
import {testRun} from "./app/js/controller/chatProgram"
import {Initial} from "./app/js/controller/initialProgram"


//1. cek apakah sudah login
const init = new Initial();

let checkSignin =async () => {
    if(init.checkIsset()){ 
        //bila sudah di set user sebelumnya maka jalankan
        //1. fect data class dan msg
        //2. prepare elemen
        
        //test untuk run program sederhana
        await testRun()
        updateTooltipDom()
        
        return;
    }else{
        //bila belum maka lakuakn pendaftaran terlebih dahulu
        //1. tampilkan view pendafatran
        //2. lakukan pendaftaran

        init.showSignin();
    }
}

checkSignin();







//jalankan tooltip
updateTooltipDom();
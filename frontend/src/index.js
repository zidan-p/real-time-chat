import css from "./app/css/index.css"
import {Initial} from "./app/js/controller/initialProgram"
import { ChatProgram } from "./app/js/controller/chatProgram";

//1. cek apakah sudah login
const init = new Initial();
const chatProgram = new ChatProgram();

//untuk loader
init.showLoader()



let checkSignin = async () => {
    if(init.checkIsset()){ 
        //bila sudah di set user sebelumnya maka jalankan
        //1. fect data class dan msg
        //2. prepare elemen
        
        //test untuk run program sederhana
        await chatProgram.run()
        
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
// updateTooltipDom();
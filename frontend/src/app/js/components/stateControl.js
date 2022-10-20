export class StateControl{

    container
    containerElement

    //dom and element control
    // -- dom manipulation --
    setDomContainer(){}
    unsetDomContainer(){this.container = null}
    fillElementDomContainer(){this.container.innerHTML = this.containerElement.innerHTML;}
    setDom(){}
    unsetDom(){}
    deleteDom(){this.container.innerHTML = ``} //semua dom baik container maupun isi
    restoreDom(){this.container.innerHTML = this.containerElement.innerHTML}

    // -- element manipulation --
    createElement(){} //semua elemen
    resetElement(){this.containerElement = this.createElement()}
    setCurrentElement(){this.containerElement = this.container.cloneNode(true)} // untuk update saat ini
    setPseudoElement(){} // inisialisasi pseudo elemen
    unsetPseudoElement(){} // hapus pseudo elemen
    deleteElement(){this.containerElement = null}

    // -- bridge dom and element --



    // --- hard controll ---
    //melalukan controlstate dengan menghapus
    //atau memodifikasi dom secara keseluruhan
    store(){
        this.setDomContainer(); //crawl ke dom (sudah disiapkan)
        this.resetElement(); // reset element
        this.fillElementDomContainer(); // hasil dom di crawl diisi dengan elemen initial
        this.setDom(); // crawl dom yg diperlukan
    }
    hide(){
        this.setCurrentElement(); //simpan dom saat ini
        this.unsetDom(); // hapus ikatan dom terkait
        this.deleteDom(); // kosongkan domnya
    }

    show(){
        this.setDomContainer(); // crawl dom untuk container
        this.restoreDom(); // restore
        this.setDom(); // creawldom untuk semuanya
    }
    backOperate(){}
    remove(){
        this.unsetDom();
        this.deleteElement();
        this.unsetDomContainer();
    }


    // --- soft control ---
    //melakukan control state ysng masih
    //meninggalkan variabel dom yang terisi
    //namun akan digunakan untuk object lainya.
}
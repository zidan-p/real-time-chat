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

    


    // --- soft control ---
    //melakukan control state ysng masih
    //meninggalkan variabel dom yang terisi
    //namun akan digunakan untuk object lainya.
}
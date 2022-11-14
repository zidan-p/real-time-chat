
/**
 * __Render buatan saya__
 * class untuk mendefinisikan sebuah component
 * 
 * @property {HTMLElement} containerElement 
 * @description
 * container utama untuk setiap elemen yang dibuat
 * ```
 * let containerElement = document.createElement('DIV')
 * ```
 * @property {Object} struct 
 * @description
 * object dasar untuk didefinisikan pada lement struct
 * ```
 * let struct = {
 *      "dokumen" : "#doc", // key adalah elemen yang didefinisikan, untuk valuenya adalah css selectornya
 *      "button" : { // atau versi objectnya untuk opsi lebih lanjut
 *          selector : ".btn-my", 
 *          mode : "all",
 *          freeze : true // menjadikan element ini tidak bisa diunset, tapi setiap di unset maka akan direfres
 *      } 
 * }
 * ```
 * @property {Object} elementStruct object yang sudah didefinisikan dari container
 * ```
 * let elementStruct = {
 *      "document" : HTMLElement,
 *      "button" : HTMLCollection
 * }
 * ```
 * @property {Function} defineCreateElement 
 * @description
 * untuk menentukan elemen default untuk pembuatan container
 * ```
 * let defineCreateElement = f()
 * ```
 * @property {Object} attachProp 
 * @description list call back yang bisa digunkna untuk detach
 * @property {Object} detachProp 
 * @description list callback yg digunakan untuk detach
 * 
 */
class ComponentStruct{

    containerElement // untuk element container utamanay
    struct = {}//
    elementStruct = {}
    createElementCallback
    attachProp = {}
    detachProp = {}

    /**
     * define struktur dasar untuk structnya.
     * nantinya struct dasar ini akan diproses selanjutnya untuk diquery dan diset pemasangannya.
     * strukturnya adalah sebagai berikut.
     * ```
     * let elementStr = {
     *      "namaElement" : "selectorcssnya",
     *      "button" : "#btn-primary", // secara default akan dijanlakan query `querySelector`
     *      "namaElement2" : {
     *          selector : "selectornya", 
     *          mode : "one", //mode hanya ada 2, all dan one 'default one'
     *          freeze : false //apakah elemen bisa dihapus 'default false'
     *      },
     *      "button2" : {
     *          selector : ".btn-warning", 
     *          mode : "all"
     *      }
     * }
     * ```
     * @param {Object} elementStr object yang berisi element struct dasar.
     */
    defineElementStruct(elementStr){
        this.struct = elementStr;
    }

    /**
     * ini adalah memasangan untuk object dom lainya.
     * sehingga yang dipasang adalah containerElementnya.
     * untuk mengisi nilaiya dengan diinject bisa langsung
     * dilakuakan this.blblbaElement.
     * @return {void}
     */
    defineAttachcement(){
        if(!this.elementStruct) throw new Error('element struct belum dibuat')
        
        for(let prop in this.elementStruct){
            /**
             * @param {ComponentStruct} structComponent
             */
            this.attachProp[prop] = (structComponent) => {
                console.log("melakukan appen untuk element : ",this.elementStruct[prop])
                this.elementStruct[prop].append(structComponent.containerElement)
            }
            this.detachProp[prop] = () => {
                this.elementStruct[prop].innerHTML = ""
            }

        }
    }

    /**
     * definisikan 
     * @param {Callback} callback 
     */
    defineCreateElement(callback){
        this.createElementCallback = callback
    }

    /**
     * buat elemen sesuai dengan domElement
     * @param {Object} object parameter bilama ketika membuat object diperlukan parameter
     * @returns {HTMLElement}
     */
    createElement(params){
        return this.createElementCallback(params);
    }
    /**
     * reset elemen pada container utama
     */
    resetElement(){
        this.containerElement = this.createElement()
    }

    /**
     * 
     * hapus semua elemen pada container
     */
    clearElement(){
        this.containerElement = ""
    }
    /**
     * menjadikan nilai container utama menjadi null.
     * meski demikian, dom element masih ada pada halaman
     */
    deleteElement(){
        this.containerElement = null
    }

    /**
     * untuk memproses struct mentah untuk menjadi struct yang sudah di query hasilnya.
     */
    setPseudoElement(){
        console.log(this.struct);
        this.elementStruct = {};
        if (!this.containerElement) throw new Error('seharusnya container element itu sudah didefinisikan')
        for (let prop in this.struct){
            if(this.isObject(this.struct[prop])){
                if(this.containerElement.querySelector(this.struct[prop].selector) === null){
                    throw new Error(`element ${prop} dengan selector ${this.struct[prop]} tidak ditemukan`)
                }
                switch(this.struct[prop].mode){
                    case "all":
                        this.elementStruct[prop] = this.containerElement.querySelectorAll(this.struct[prop].selector)
                        break
                    case "one":
                    default:
                        this.elementStruct[prop] = this.containerElement.querySelector(this.struct[prop].selector)
                    }
            }else{
                if(this.containerElement.querySelector(this.struct[prop]) === null){
                    throw new Error(`element ${prop} dengan selector ${this.struct[prop]} tidak ditemukan`)
                }
                this.elementStruct[prop] = this.containerElement.querySelector(this.struct[prop])
            }
        }
        this.test()
    }

    /**
     * menghapus serta menghilangkan semua pseudo element pada struct yang diquery
     * untuk bila freeze true, maka tidak akan dilakuakn unseting
     */
    unsetPseudoElement(){
        for (let prop in this.elementStruct){
            if(this.isObject(this.struct[prop]) && this.struct[prop].freeze) continue;
            this.elementStruct[prop] = null;
        }
    }

    /**
     * untuk cek apakan argument itu object
     * @param {Object} obj
     * @return {boolean}
     */
    isObject(obj){
        if(
            typeof obj === 'object' &&
            obj !== null &&
            !Array.isArray(obj)
        ) return true
        return false
    }

    /**
     * untuk testing object ini
     */
    test(){
        console.log(this)
    }
}

export {ComponentStruct}
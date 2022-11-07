class DefaultMain{

    isActive = true;
    containerElement

    constructor(){
        this.containerElement = document.createElement('DIV');
    }

    setInactive(){
        this.isActive = false
    }
    setActive(){
        this.isActive = true
    }
}

export {DefaultMain}
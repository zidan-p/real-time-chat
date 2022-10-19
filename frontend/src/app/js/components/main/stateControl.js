export class StateControl{

    store(){
        this.setDomContainer();
        this.setDom();
        this.fillCurrentElementDom();
        this.fillElementDomContainer();
    }
    hide(){
        this.setCurrentElement();
        this.unsetDom();
    }

    show(){
        this.setDom();
        this.restoreDom();
    }
    remove(){
        this.unsetDom();
        this.deleteElement();
        this.unsetDomContainer();
    }
}
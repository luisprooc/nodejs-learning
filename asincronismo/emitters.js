import { SAVE } from "./events.js";

class Emitter{
    constructor(){
        this.events = {};
    }

    on(type,listener){
        this.events[type] = this.events[type] || [];
        this.events[type].push(listener);
    }

    emit(type){
        if(this.events[type]){

            this.events[type].forEach(item => {
                typeof item === "function" ?
                    item()
                    :
                    console.log(item);
            });
        }

        return ;
    }
}


const e = new Emitter();


e.on(SAVE,()=> console.log("Hola"));
e.on(SAVE,()=> console.log("BOBO"));

e.emit(SAVE);
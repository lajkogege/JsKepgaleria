import { Kartya } from "./Kartya.js";

export default class Jatekter{
    #lista=[];
    #tartalomElem
    constructor(lista,tartalomElem){
        this.#lista=lista;
        this.#tartalomElem=tartalomElem;
        this.kartyaKiir();
    }

    kartyaKiir(){
        this.#lista.forEach((elem) => {
            console.log(elem);
            new Kartya(elem, this.#tartalomElem);
        });
    }
}
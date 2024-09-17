import Kartya from "./Kartya.js";

export default class Jatekter {
    #lista = [];
    #taraloELem
    constructor(lista, taraloElem) {
        this.#lista = lista;
        this.#taraloELem = taraloElem;
        this.#taraloELem.empty();
        this.kartyaKiir();
    }

    kartyaKiir() {
        this.#lista.forEach((elem) => {
            console.log(elem);
            new Kartya(elem, this.#taraloELem);
        });
    }
}
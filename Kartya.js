export default class Kartya {
    //adattagok
    #obj = {};
    #szuloElem;
    //constructor
    constructor(obj,szuloElem) {
        this.#obj=obj;
        this.#szuloElem = szuloElem;
        console.log(this.#szuloElem)
        this.kartyaKiir();
    }
    kartyaKiir() {
        this.#szuloElem.append(`
         <div class="card col-lg-4 col-md-6">
                <div class="card-body >
                    <p>${this.#obj.kep}</p>
                </div>
        `)
    }

    
}
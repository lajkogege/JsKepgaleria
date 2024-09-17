export default class Kartya {
    //adattagok
    #obj = {};
    #szuloElem;
    //constructor
    constructor(obj,szuloElem) {
        this.#obj=obj;
        this.#szuloElem = szuloElem;
        
        this.kartyaKiir();
        this.kepElem=$(".kivalasztott:last");
        console.log(this.#szuloElem)
        this.esemenyKezelo();
    }
    kartyaKiir() {
        this.#szuloElem.append(`
         <div class="card kivalaszt col-lg-4 col-md-6">
                <div class="card-body >
                    <img src="${this.#obj.kep}" alt="" class="card-img-top">
                </div>
        </div>
        `)
        console.log(this.#obj.kep)
    
    }

    esemenyKezelo() {
        this.kepElem.on("click", () => {
            console.log(this)
            //létrehozunk egy saját eseményt
            const e = new CustomEvent("kivalaszt", { detail: this.#obj })
            window.dispatchEvent(e)
        }

        )
    }
}